"""Bind only the requested tool path, leaving the site origin and other routes alone."""
import json
import os
import subprocess
import time

BASE = "https://api.cloudflare.com/client/v4"
ZONE = "9416c421d3b93f331115f7e0d4ae70b2"
ACCOUNT = os.environ["CLOUDFLARE_ACCOUNT_ID"]
SCRIPT = "oportunidadpais-site"
PATTERN = "oportunidadpais.cl/herramientas/oportunidades-sostenibilidad/*"
HEADERS = ["-H", "X-Auth-Email: " + os.environ["CLOUDFLARE_EMAIL"], "-H", "X-Auth-Key: " + os.environ["CLOUDFLARE_API_KEY"]]


def api(method, path, payload=None):
    command = ["curl", "-fsS", "-X", method, *HEADERS, BASE + path]
    if payload is not None:
        command.extend(["-H", "Content-Type: application/json", "--data", json.dumps(payload)])
    r = subprocess.run(command, capture_output=True, text=True)
    if r.returncode:
        raise RuntimeError(f"Cloudflare transport failed: {method} {path}")
    data = json.loads(r.stdout)
    if not data.get("success"):
        raise RuntimeError(f"Cloudflare refused {method} {path}: " + str([(e.get("code"), e.get("message")) for e in data.get("errors", [])]))
    return data.get("result")


zone = api("GET", f"/zones/{ZONE}")
if zone.get("name") != "oportunidadpais.cl" or zone.get("account", {}).get("id") != ACCOUNT:
    raise RuntimeError("Zone/hostname/account mismatch. Route left unchanged.")
script_names = {s.get("id") for s in api("GET", f"/accounts/{ACCOUNT}/workers/scripts")}
if SCRIPT not in script_names:
    raise RuntimeError("Target Worker absent. Route left unchanged.")
path = f"/zones/{ZONE}/workers/routes"
existing = api("GET", path)
matched = [r for r in existing if r.get("pattern") == PATTERN]
if matched and any(r.get("script") != SCRIPT for r in matched):
    raise RuntimeError("The exact route is owned by another Worker. Route left unchanged.")
if not matched:
    api("POST", path, {"pattern": PATTERN, "script": SCRIPT})
    print("Created the path-specific route.")
else:
    print("The path-specific route was already present.")
for attempt in range(5):
    verified = api("GET", path)
    if any(r.get("pattern") == PATTERN and r.get("script") == SCRIPT for r in verified):
        print("Verified", PATTERN, "=>", SCRIPT)
        break
    time.sleep(1)
else:
    raise RuntimeError("Route creation was accepted but readback did not confirm it.")
