import json
import os
import subprocess

BASE = "https://api.cloudflare.com/client/v4"
ZONE = "9416c421d3b93f331115f7e0d4ae70b2"
ACCOUNT = os.environ["CLOUDFLARE_ACCOUNT_ID"]
HEADERS = ["-H", "X-Auth-Email: " + os.environ["CLOUDFLARE_EMAIL"], "-H", "X-Auth-Key: " + os.environ["CLOUDFLARE_API_KEY"]]


def get(path):
    r = subprocess.run(["curl", "-fsS", *HEADERS, BASE + path], capture_output=True, text=True)
    try:
        body = json.loads(r.stdout)
    except json.JSONDecodeError:
        print("Request returned no JSON:", path, "curl_exit", r.returncode)
        return None
    if not body.get("success"):
        print("API rejected", path, [(e.get("code"), e.get("message")) for e in body.get("errors", [])])
        return None
    return body.get("result")


zone = get(f"/zones/{ZONE}")
if zone:
    print("zone", zone.get("name"), "account", zone.get("account", {}).get("id"))
routes = get(f"/zones/{ZONE}/workers/routes")
if routes is not None:
    print("routes", [(r.get("pattern"), r.get("script")) for r in routes])
scripts = get(f"/accounts/{ACCOUNT}/workers/scripts")
if scripts is not None:
    print("worker_names", [s.get("id") for s in scripts if "oportunidad" in s.get("id", "").lower()])
