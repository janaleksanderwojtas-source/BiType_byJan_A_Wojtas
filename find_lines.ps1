$jsPath = "C:\Users\msi\.gemini\antigravity\scratch\bitype-website\app.js"
$outputPath = "C:\Users\msi\.gemini\antigravity\scratch\bitype-website\matches.txt"
$terms = @(
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
)

$out = @()
$lines = Get-Content $jsPath

foreach ($term in $terms) {
    $out += "=== Matches for '$term' ==="
    $found = $false
    for ($i = 0; $i -lt $lines.Length; $i++) {
        if ($lines[$i].Contains($term)) {
            $ln = $i + 1
            $text = $lines[$i].Trim()
            $out += "$ln: $text"
            $found = $true
        }
    }
    if (-not $found) {
        $out += "No matches"
    }
}

$out | Out-File -FilePath $outputPath -Encoding utf8
