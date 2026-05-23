$htmlPath = "C:\Users\msi\.gemini\antigravity\scratch\bitype-website\index.html"
$jsPath = "C:\Users\msi\.gemini\antigravity\scratch\bitype-website\app.js"

$html = Get-Content $htmlPath -Raw
$js = Get-Content $jsPath -Raw

# Find all id="..." or id='...' in html
$htmlIds = [regex]::Matches($html, 'id=["'']([^"'']+)["'']') | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique

# Find all getElementById('...') in js
$jsIds = [regex]::Matches($js, 'getElementById\((["''])([^"'']+)\1\)') | ForEach-Object { $_.Groups[2].Value } | Sort-Object -Unique

Write-Output "Found $($htmlIds.Count) unique IDs in HTML."
Write-Output "Found $($jsIds.Count) unique getElementById targets in JS."

$missing = @()
foreach ($id in $jsIds) {
    if ($id -notin $htmlIds) {
        $missing += $id
    }
}

if ($missing.Count -gt 0) {
    Write-Output "WARNING: The following IDs are referenced in app.js but not found in index.html: $($missing -join ', ')"
} else {
    Write-Output "SUCCESS: All getElementById targets in app.js exist in index.html!"
}

# Check specific buttons
$buttons = @('btn-export-png', 'btn-export-svg', 'btn-export-ttf', 'btn-export-sheet-png', 'btn-export-sheet-svg')
foreach ($btn in $buttons) {
    $exists = $btn -in $htmlIds
    Write-Output "  $($btn): $(if ($exists) { 'Found' } else { 'MISSING' })"
}

Write-Output "  input-zoom: $(if ('input-zoom' -in $htmlIds) { 'Found' } else { 'MISSING' })"
Write-Output "  val-zoom: $(if ('val-zoom' -in $htmlIds) { 'Found' } else { 'MISSING' })"
