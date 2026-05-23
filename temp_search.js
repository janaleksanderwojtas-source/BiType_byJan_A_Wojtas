const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
const lines = fs.readFileSync(appJsPath, 'utf8').split('\n');

const patterns = [
  /const PRESETS/,
  /applyPreset/,
  /FONT_WEIGHT_MAP/,
  /btn-clear-text/,
  /clearText/,
  /btn-export-ttf/,
  /exportTTF/,
  /drawCharCell/,
  /generateSVGData/,
  /notdef/,
  /BITYPE_ALPHABET/,
  /btn-use-installed-font/,
  /btnUseInstalledFont/
];

lines.forEach((line, index) => {
  const lineNum = index + 1;
  const matched = [];
  patterns.forEach(pat => {
    if (pat.test(line)) {
      matched.push(pat.toString());
    }
  });
  if (matched.length > 0) {
    console.log(`Line ${lineNum} (${matched.join(', ')}): ${line.trim()}`);
  }
});
