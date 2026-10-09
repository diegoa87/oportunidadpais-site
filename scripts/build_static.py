from pathlib import Path
from shutil import copy2, copytree, rmtree

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "dist"
if OUT.exists():
    rmtree(OUT)
OUT.mkdir()

for path in ROOT.glob("*.html"):
    copy2(path, OUT / path.name)
for name in ("robots.txt", "sitemap.xml", "feed.xml", "_headers"):
    path = ROOT / name
    if path.is_file():
        copy2(path, OUT / name)
for name in ("assets", "fotos", "transcripts", "videos", "api", "herramientas"):
    path = ROOT / name
    if path.is_dir():
        copytree(path, OUT / name)

assert (OUT / "herramientas/oportunidades-sostenibilidad/index.html").exists()
assert not (OUT / ".git").exists()
print("Static asset bundle prepared from allowlisted files and directories.")
