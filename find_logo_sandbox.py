import json
import os

transcript_path = r"C:\Users\msi\.gemini\antigravity\brain\2ee9f410-f4a4-4a12-b3fa-30129a0c9f9e\.system_generated\logs\transcript.jsonl"
output_path = r"C:\Users\msi\.gemini\antigravity\scratch\bitype-website\found_logo_code.txt"

found_blocks = []

if os.path.exists(transcript_path):
    with open(transcript_path, 'r', encoding='utf-8') as f:
        for i, line in enumerate(f):
            if "drawHeaderLogo" in line and "logoCanvas" in line:
                try:
                    obj = json.loads(line)
                except Exception:
                    continue
                
                # Check tool_calls, specifically CodeContent or ReplacementContent or args
                tool_calls = obj.get("tool_calls", [])
                for tc in tool_calls:
                    args = tc.get("args", {})
                    for k, v in args.items():
                        if isinstance(v, str) and "drawHeaderLogo" in v and "logoCanvas" in v:
                            # Try to extract the function drawHeaderLogo
                            idx = v.find("function drawHeaderLogo")
                            if idx != -1:
                                # Count braces to extract full function
                                sub = v[idx:]
                                brace_count = 0
                                started = False
                                end_idx = -1
                                for char_idx, char in enumerate(sub):
                                    if char == '{':
                                        brace_count += 1
                                        started = True
                                    elif char == '}':
                                        brace_count -= 1
                                    if started and brace_count == 0:
                                        end_idx = char_idx + 1
                                        break
                                if end_idx != -1:
                                    func_body = sub[:end_idx]
                                    # Let's clean it up if it has escaped characters
                                    func_body = func_body.replace("\\n", "\n").replace('\\"', '"')
                                    # Make sure it's long enough to be the actual function (more than 200 chars)
                                    if len(func_body) > 200:
                                        found_blocks.append(f"--- MATCH AT LINE {i} KEY {k} ---\n" + func_body + "\n")

    if found_blocks:
        with open(output_path, 'w', encoding='utf-8') as out:
            out.writelines(found_blocks)
        print(f"Success! Written {len(found_blocks)} matches to found_logo_code.txt")
    else:
        print("No matches with full function body found.")
else:
    print("Transcript path not found.")
