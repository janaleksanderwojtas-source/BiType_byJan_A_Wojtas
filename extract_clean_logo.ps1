$path = "C:\Users\msi\.gemini\antigravity\brain\2ee9f410-f4a4-4a12-b3fa-30129a0c9f9e\.system_generated\logs\transcript.jsonl"
$output = "C:\Users\msi\.gemini\antigravity\scratch\bitype-website\clean_logo.txt"

if (Test-Path $path) {
    $lines = [System.IO.File]::ReadLines($path)
    $clean_funcs = @()
    foreach ($line in $lines) {
        if ($line.Contains("function drawHeaderLogo") -and $line.Contains("logoCanvas")) {
            # Let's parse this JSON line
            try {
                $obj = ConvertFrom-Json $line -ErrorAction Stop
                
                # Check inside content
                if ($obj.content -and $obj.content.Contains("function drawHeaderLogo")) {
                    $idx = $obj.content.IndexOf("function drawHeaderLogo")
                    $sub = $obj.content.Substring($idx)
                    $clean_funcs += $sub
                }
                
                # Check tool calls
                if ($obj.tool_calls) {
                    foreach ($tc in $obj.tool_calls) {
                        if ($tc.args) {
                            # Look at all arguments
                            foreach ($prop in $tc.args.PSObject.Properties) {
                                if ($prop.Value -is [string] -and $prop.Value.Contains("function drawHeaderLogo")) {
                                    $idx = $prop.Value.IndexOf("function drawHeaderLogo")
                                    $sub = $prop.Value.Substring($idx)
                                    $clean_funcs += $sub
                                }
                            }
                        }
                    }
                }
            } catch {
                # Ignore JSON parse errors
            }
        }
    }
    
    # Save the found functions (let's restrict to first few lines of each to inspect)
    $results = @()
    foreach ($func in $clean_funcs) {
        # Braces counting to find end of function
        $braceCount = 0
        $started = $false
        $endIdx = -1
        $chars = $func.ToCharArray()
        for ($i = 0; $i -lt $chars.Length; $i++) {
            $c = $chars[$i]
            if ($c -eq '{') {
                $braceCount++
                $started = $true
            } elseif ($c -eq '}') {
                $braceCount--
            }
            if ($started -and $braceCount -eq 0) {
                $endIdx = $i + 1
                break
            }
        }
        if ($endIdx -ne -1) {
            $results += $func.Substring(0, $endIdx)
            $results += "`n========================================`n"
        }
    }
    
    if ($results.Count -gt 0) {
        Set-Content -Path $output -Value $results
        Write-Output "Successfully wrote $($results.Count / 2) functions to clean_logo.txt"
    } else {
        Write-Output "No clean functions found by brace matching."
    }
} else {
    Write-Output "Transcript file not found."
}
