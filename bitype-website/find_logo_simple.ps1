$transcriptPath = "C:\Users\msi\.gemini\antigravity\brain\2ee9f410-f4a4-4a12-b3fa-30129a0c9f9e\.system_generated\logs\transcript.jsonl"
$outputPath = "C:\Users\msi\.gemini\antigravity\scratch\bitype-website\found_logo.txt"

$results = [System.Collections.Generic.List[string]]::new()

$stream = [System.IO.File]::Open($transcriptPath, [System.IO.FileMode]::Open, [System.IO.FileAccess]::Read, [System.IO.FileShare]::ReadWrite)
$reader = [System.IO.StreamReader]::new($stream)

while (($line = $reader.ReadLine()) -ne $null) {
    if ($line.Contains("function drawHeaderLogo")) {
        $idx = $line.IndexOf("function drawHeaderLogo")
        if ($idx -ge 0) {
            $snippet = $line.Substring($idx)
            # Clean up JSON-escaped newlines and quotes
            $cleaned = $snippet -replace '\\\\n', "`r`n" -replace '\\n', "`r`n" -replace '\\"', '"'
            $results.Add("--- OCCURRENCE ---")
            $results.Add($cleaned)
        }
    }
}

$reader.Dispose()
$stream.Dispose()

Set-Content -Path $outputPath -Value $results
Write-Output "Done! Results written to found_logo.txt"
