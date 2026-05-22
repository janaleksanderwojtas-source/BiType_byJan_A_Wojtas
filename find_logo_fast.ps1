$path = "C:\Users\msi\.gemini\antigravity\brain\2ee9f410-f4a4-4a12-b3fa-30129a0c9f9e\.system_generated\logs\transcript.jsonl"
$output = "C:\Users\msi\.gemini\antigravity\scratch\bitype-website\found_logo_code.txt"

$found = @()
$lines = [System.IO.File]::ReadLines($path)
$lineCount = 0
foreach ($line in $lines) {
    $lineCount++
    if ($line.Contains("drawHeaderLogo") -and $line.Contains("logoCanvas")) {
        $found += "--- Line $lineCount ---"
        $found += $line
    }
}

Set-Content -Path $output -Value $found
Write-Output "Found $($found.Count / 2) matches"
