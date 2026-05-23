import re
import os

html_path = r"C:\Users\msi\.gemini\antigravity\scratch\bitype-website\index.html"
js_path = r"C:\Users\msi\.gemini\antigravity\scratch\bitype-website\app.js"

print("Starting static verification...")

if not os.path.exists(html_path):
    print(f"Error: {html_path} does not exist.")
    exit(1)
if not os.path.exists(js_path):
    print(f"Error: {js_path} does not exist.")
    exit(1)

# Extract IDs from HTML
with open(html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

html_ids = set(re.findall(r'id=["\']([^"\']+)["\']', html_content))
print(f"Found {len(html_ids)} unique IDs in index.html.")

# Extract getElementById calls from JS
with open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

js_ids = set(re.findall(r'getElementById\(["\']([^"\']+)["\']\)', js_content))
print(f"Found {len(js_ids)} unique getElementById targets in app.js.")

# Check for missing IDs
missing_ids = js_ids - html_ids
if missing_ids:
    print(f"WARNING: The following IDs are referenced in app.js but not found in index.html: {missing_ids}")
else:
    print("SUCCESS: All getElementById targets in app.js exist in index.html!")

# Verify event listeners for buttons
buttons_checked = [
    'btn-export-png', 'btn-export-svg', 'btn-export-ttf',
    'btn-export-sheet-png', 'btn-export-sheet-svg'
]

print("\nVerifying specific elements and buttons existence:")
for btn in buttons_checked:
    exists = btn in html_ids
    print(f"  {btn}: {'Found' if exists else 'MISSING'}")

# Verify zoom input existence
print(f"  input-zoom: {'Found' if 'input-zoom' in html_ids else 'MISSING'}")
print(f"  val-zoom: {'Found' if 'val-zoom' in html_ids else 'MISSING'}")
