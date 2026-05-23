const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, 'app.js');
const terms = [
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
];

if (!fs.existsSync(jsPath)) {
    console.error("app.js not found at " + jsPath);
    process.exit(1);
}

const content = fs.readFileSync(jsPath, 'utf8');
const lines = content.split('\n');

terms.forEach(term => {
    console.log("=== Matches for '" + term + "' ===");
    let found = false;
    lines.forEach((line, idx) => {
        if (line.includes(term)) {
            console.log("Line " + (idx + 1) + ": " + line.trim());
            found = true;
        }
    });
    if (!found) {
        console.log("No matches");
    }
});
