import re

js_path = r"C:\Users\msi\.gemini\antigravity\scratch\bitype-website\app.js"
terms = [
    "PRESETS",
    "FONT_WEIGHT_MAP",
    "btn-use-installed-font",
    "btnUseInstalledFont",
    "input-installed-font",
    "applyPreset",
    "drawCharCell",
    "generateSVG",
    "notdef",
    "btn-export-ttf",
    "btnExportTtf",
    "ttf-warning-modal",
    "btn-clear-text",
    "sample-text-area",
    "updateSpecimenWeight",
    "initFontPageLogic"
]

with open(js_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

for term in terms:
    print(f"=== Matches for '{term}' ===")
    found = False
    for idx, line in enumerate(lines):
        if term in line:
            print(f"Line {idx+1}: {line.strip()}")
            found = True
    if not found:
        print("No matches")
