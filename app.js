/* -------------------------------------------------------------
 * BITYPE TYPE SYSTEM — APPLICATION LOGIC
 * ------------------------------------------------------------- */

// 1. MASTER BINARY DATA FOR 4x4 GLYPHS
const BITYPE_ALPHABET = {
  "0": [0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0],
  "1": [0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1],
  "2": [1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1],
  "3": [1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1],
  "4": [1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1],
  "5": [1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1],
  "6": [1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1],
  "7": [1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0],
  "8": [1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1],
  "9": [1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1],
  "A": [1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1],
  "B": [1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1],
  "C": [1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1],
  "D": [1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0],
  "E": [1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1],
  "F": [1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0],
  "G": [1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1],
  "H": [1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1],
  "I": [0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0],
  "J": [0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1],
  "K": [1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1],
  "L": [1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1],
  "M": [1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1],
  "N": [1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1],
  "O": [1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1],
  "P": [1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0],
  "Q": [1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1],
  "R": [1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0],
  "S": [1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1],
  "T": [1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0],
  "U": [1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1],
  "V": [1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0],
  "W": [1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1],
  "X": [1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1],
  "Y": [1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0],
  "Z": [1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1],
  ".": [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
  ",": [0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0],
  "!": [1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
  "?": [1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0],
  " ": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ":": [1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
  ";": [1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0],
  "(": [0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1],
  ")": [1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0],
  "+": [0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0],
  "-": [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
  "=": [0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0],
  "_": [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
  "*": [0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0],
  "/": [0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0],
  "&": [1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1]
};

const DEFAULT_BITYPE_ALPHABET = JSON.parse(JSON.stringify(BITYPE_ALPHABET));

// 2. SYSTEM PRESETS DEFINITIONS
const PRESETS = {
  "bnw": {
    name: "BiType BnW",
    bg: "#ffffff",
    color1: "#000000",
    color0: "#000000",
    borders: false,
    borderColor: "#e0e0e0",
    borderWidth: 1,
    stemRatio: 0.25,
    mode: "default",
    cellBg: false,
    cellBgColor: "#121212"
  },
  "boxed": {
    name: "BiType Boxed",
    bg: "#ffffff",
    color1: "#000000",
    color0: "#000000",
    outerBorders: true,
    innerBorders: false,
    borderColor: "#000000",
    borderWidth: 1,
    stemRatio: 0.25,
    mode: "default",
    cellBg: false,
    cellBgColor: "#121212"
  },
  "pcb": {
    name: "BiType PCB",
    bg: "#1a3c1a",
    color1: "#c8a951",
    color0: "#c8a951",
    outerBorders: true,
    innerBorders: false,
    borderColor: "#3a5c3a",
    borderWidth: 1.5,
    stemRatio: 0.25,
    mode: "default",
    cellBg: true,
    cellBgColor: "#102f10"
  },
  "matrix": {
    name: "BiType Matrix",
    bg: "#000000",
    color1: "#ffffff",
    color0: "#ffffff",
    borders: false,
    borderColor: "#222222",
    borderWidth: 1,
    stemRatio: 0.25,
    mode: "default",
    cellBg: false,
    cellBgColor: "#121212"
  }
};

// 3. GLOBAL APPLICATION STATE
const STATE = {
  // Current Creator Settings
  settings: {
    cellSize: 48,
    cellPadding: 4,
    letterSpacing: 16,
    lineSpacing: 24,
    bg: "#0a0a0a",
    color1: "#ffffff",
    color0: "#ffffff",
    outerBorders: true,
    innerBorders: false,
    cellBg: false,
    cellBgColor: "#121212",
    borderColor: "#222222",
    borderWidth: 1,
    zoom: 1.0,
    
    // Tab representations
    representationMode: "default", // "default", "glyphs", "images"
    
    // Default Mode
    stemRatio: 0.25,
    
    // Glyph Mode
    fontFamily: "'Space Mono', monospace",
    glyph1: "1",
    glyph0: "0",
    
    // Image Mode
    img1: null, // Image element or null
    img0: null, // Image element or null
    img1Name: "",
    img0Name: "",
    tintOpacity: 0.40
  },
  
  // Custom presets stored in localStorage
  customPresets: {},
  
  // Active Preset ID (if any)
  activePresetId: ""
};

// Offscreen canvases for image caching with color overlays
const offscreenImgCanvas1 = document.createElement('canvas');
const offscreenImgCanvas0 = document.createElement('canvas');

// 4. DOM ELEMENTS CACHE
const DOM = {
  // Nav Links
  navLinks: document.querySelectorAll('.nav-link'),
  pageSections: document.querySelectorAll('.page-section'),
  
  // Dynamic Canvas/SVG Elements
  editorSvgContainer: document.getElementById('editor-svg-container'),
  canvasContainer: document.getElementById('canvas-container'),
  
  // Text Areas
  sampleText: document.getElementById('sample-text-area'),
  fontUpload: document.getElementById('font-upload'),
  fontUploadName: document.getElementById('font-upload-name'),
  charCounter: document.getElementById('char-counter'),
  btnClearText: document.getElementById('btn-clear-text'),
  btnToggleFit: document.getElementById('btn-toggle-fit'),
  
  // Settings - Geometry
  inputCellSize: document.getElementById('input-cell-size'),
  valCellSize: document.getElementById('val-cell-size'),
  inputCellPadding: document.getElementById('input-cell-padding'),
  valCellPadding: document.getElementById('val-cell-padding'),
  inputLetterSpacing: document.getElementById('input-letter-spacing'),
  valLetterSpacing: document.getElementById('val-letter-spacing'),
  inputLineSpacing: document.getElementById('input-line-spacing'),
  valLineSpacing: document.getElementById('val-line-spacing'),
  
  // Settings - Colors
  colorBg: document.getElementById('color-bg'),
  hexBg: document.getElementById('hex-bg'),
  colorGlyph1: document.getElementById('color-glyph1'),
  hexGlyph1: document.getElementById('hex-glyph1'),
  colorGlyph0: document.getElementById('color-glyph0'),
  hexGlyph0: document.getElementById('hex-glyph0'),
  
  // Settings - Borders & Cells
  toggleOuterBorders: document.getElementById('toggle-outer-borders'),
  toggleInnerBorders: document.getElementById('toggle-inner-borders'),
  toggleCellBg: document.getElementById('toggle-cell-bg'),
  colorBorder: document.getElementById('color-border'),
  hexBorder: document.getElementById('hex-border'),
  colorCellBg: document.getElementById('color-cell-bg'),
  hexCellBg: document.getElementById('hex-cell-bg'),
  colCellBgColor: document.getElementById('col-cell-bg-color'),
  inputBorderWidth: document.getElementById('input-border-width'),
  valBorderWidth: document.getElementById('val-border-width'),
  
  // Settings - Tabs & Options
  tabBtns: document.querySelectorAll('.tab-btn'),
  tabPanes: document.querySelectorAll('.tab-pane'),
  inputStemRatio: document.getElementById('input-stem-ratio'),
  valStemRatio: document.getElementById('val-stem-ratio'),
  selectFontFamily: document.getElementById('select-font-family'),
  inputGlyph1: document.getElementById('input-glyph-1'),
  inputGlyph0: document.getElementById('input-glyph-0'),
  
  // Settings - Uploads
  fileGlyph1: document.getElementById('file-glyph-1'),
  fileGlyph0: document.getElementById('file-glyph-0'),
  infoGlyph1: document.getElementById('info-glyph-1'),
  infoGlyph0: document.getElementById('info-glyph-0'),
  uploadBox1: document.getElementById('upload-box-1'),
  uploadBox0: document.getElementById('upload-box-0'),
  btnResetImages: document.getElementById('btn-reset-images'),
  inputTintOpacity: document.getElementById('input-tint-opacity'),
  valTintOpacity: document.getElementById('val-tint-opacity'),
  
  // Settings - Glyph Designer
  designerCharSelect: document.getElementById('designer-char-select'),
  btnDesignerReset: document.getElementById('btn-designer-reset'),
  designerGrid: document.getElementById('designer-grid'),
  btnDesignerExport: document.getElementById('btn-designer-export'),
  designerImportFile: document.getElementById('designer-import-file'),
  
  // Presets
  presetsSwatches: document.getElementById('presets-swatches'),
  customPresetName: document.getElementById('custom-preset-name'),
  btnSavePreset: document.getElementById('btn-save-preset'),
  customPresetsSwatches: document.getElementById('custom-presets-swatches'),
  
  // Exports
  btnExportPng: document.getElementById('btn-export-png'),
  btnExportSvg: document.getElementById('btn-export-svg'),
  btnExportTtf: document.getElementById('btn-export-ttf'),
  btnExportSheetPng: document.getElementById('btn-export-sheet-png'),
  btnExportSheetSvg: document.getElementById('btn-export-sheet-svg'),
  inputZoom: document.getElementById('input-zoom'),
  valZoom: document.getElementById('val-zoom'),
  inputInstalledFont: document.getElementById('input-installed-font'),
  btnUseInstalledFont: document.getElementById('btn-use-installed-font'),
  inputFontName: document.getElementById('input-font-name'),
  
  // Page 2: The Font Specimen
  weightLabels: document.querySelectorAll('.weight-label'),
  weightSlider: document.getElementById('weight-slider'),
  specimenWeightText: document.getElementById('specimen-weight-text'),
  specimenInputEdit: document.getElementById('specimen-input-edit'),
  
  // Page 2: Glyph Map
  analysisChar: document.getElementById('analysis-char'),
  analysisGrid: document.getElementById('analysis-grid'),
  analysisRawBinary: document.getElementById('analysis-raw-binary'),
  analysisMatrixText: document.getElementById('analysis-matrix-text'),
  charactersListGrid: document.getElementById('characters-list-grid'),
  
  // Page 3: About interactive diagram
  aboutGrid: document.getElementById('about-interactive-grid'),
  aboutBinaryArray: document.getElementById('about-binary-array'),
  aboutFilledCells: document.getElementById('about-filled-cells'),
  aboutEstimatedWeight: document.getElementById('about-estimated-weight'),
  aboutBtnClear: document.getElementById('about-btn-clear'),
  logoCanvas: document.getElementById('logo-canvas'),
  processingOverlay: document.getElementById('processing-overlay'),
  processingText: document.getElementById('processing-text')
};

// -------------------------------------------------------------
// NAVIGATION & PAGE ROUTING (SPA)
// -------------------------------------------------------------
function initRouting() {
  DOM.navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-target');
      
      // Update nav links styling
      DOM.navLinks.forEach(nl => nl.classList.remove('active'));
      link.classList.add('active');
      
      // Show/hide sections
      DOM.pageSections.forEach(section => {
        section.classList.remove('active');
        if (section.id === `page-${target}`) {
          section.classList.add('active');
        }
      });
      
      // If creator page is active, trigger resize & draw to ensure correct proportions
      if (target === 'creator') {
        setTimeout(drawCreatorText, 50);
      }
      
      // Update hash in URL
      window.location.hash = target;
    });
  });
  
  // Deep link support on load
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const activeLink = document.querySelector(`.nav-link[data-target="${hash}"]`);
    if (activeLink) {
      activeLink.click();
    }
  }
}

// -------------------------------------------------------------
// DYNAMIC CANVAS RENDERER LOGIC
// -------------------------------------------------------------

// Draws a single character in coordinate box size x size
function drawCharCell(ctx, char, x, y, size, settings) {
  let binary = BITYPE_ALPHABET[char.toUpperCase()];
  if (!binary) {
    // Treat unknown characters as the "NO GLYPH" (all ones)
    binary = new Array(16).fill(1);
  }
  
  const COLS = 4;
  const ROWS = 4;
  
  // Single grid cell inside the 4x4 matrix
  const matrixCellSize = size / 4;
  const padding = settings.cellPadding;
  
  // 1. Draw cell backgrounds (if enabled)
  if (settings.cellBg) {
    ctx.fillStyle = settings.cellBgColor;
    for (let i = 0; i < 16; i++) {
      const row = Math.floor(i / COLS);
      const col = i % COLS;
      const cellX = x + col * matrixCellSize;
      const cellY = y + row * matrixCellSize;
      ctx.fillRect(cellX, cellY, matrixCellSize, matrixCellSize);
    }
  }
  
  // 2. Draw active/inactive shapes
  for (let i = 0; i < 16; i++) {
    const row = Math.floor(i / COLS);
    const col = i % COLS;
    
    const cellX = x + col * matrixCellSize;
    const cellY = y + row * matrixCellSize;
    
    const drawX = cellX + padding;
    const drawY = cellY + padding;
    const innerSize = matrixCellSize - 2 * padding;
    
    if (innerSize > 0) {
      const bit = binary[i];
      drawRepresentation(ctx, drawX, drawY, innerSize, bit === 1, settings);
    }
  }
  
  // 3. Draw borders (inner and outer)
  ctx.strokeStyle = settings.borderColor;
  ctx.lineWidth = settings.borderWidth;
  
  if (settings.innerBorders) {
    for (let i = 0; i < 16; i++) {
      const row = Math.floor(i / COLS);
      const col = i % COLS;
      const cellX = x + col * matrixCellSize;
      const cellY = y + row * matrixCellSize;
      ctx.strokeRect(cellX, cellY, matrixCellSize, matrixCellSize);
    }
  }
  
  if (settings.outerBorders) {
    ctx.strokeRect(x, y, size, size);
  }
}

// Helper to draw shape based on mode
function drawRepresentation(ctx, x, y, size, isActive, settings) {
  if (settings.representationMode === "default") {
    // Standard Bars + Circles system
    if (isActive) {
      // Glyph-1 (Bar)
      const stemW = size * settings.stemRatio;
      ctx.fillStyle = settings.color1;
      ctx.fillRect(x + (size - stemW) / 2, y, stemW, size);
    } else {
      // Glyph-0 (Circle Ring)
      const cx = x + size / 2;
      const cy = y + size / 2;
      const R = size / 2;
      const r = Math.max(0, R * (1 - settings.stemRatio * 1.5)); // Shrink inner radius as weight increases
      
      ctx.fillStyle = settings.color0;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.arc(cx, cy, r, 0, Math.PI * 2, true); // hole
      ctx.closePath();
      ctx.fill('evenodd');
    }
  } 
  else if (settings.representationMode === "glyphs") {
    // Text Character mode
    const char = isActive ? settings.glyph1 : settings.glyph0;
    const color = isActive ? settings.color1 : settings.color0;
    
    ctx.fillStyle = color;
    ctx.font = `bold ${size}px ${settings.fontFamily}`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillText(char, x + size / 2, y + size / 2);
  } 
  else if (settings.representationMode === "images") {
    // Uploaded Image mode
    const img = isActive ? settings.img1 : settings.img0;
    const color = isActive ? settings.color1 : settings.color0;
    
    if (img) {
      // We draw cached offscreen canvas representing the colored image
      const offscreen = isActive ? offscreenImgCanvas1 : offscreenImgCanvas0;
      ctx.drawImage(offscreen, x, y, size, size);
    } else {
      // Fallback if no image uploaded
      ctx.fillStyle = color;
      if (isActive) {
        ctx.fillRect(x, y, size, size);
      } else {
        ctx.beginPath();
        ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}

// Helper to wrap text at maxLen characters, wrapping on word boundaries if possible
function wrapText(text, maxLen = 20) {
  const paragraphs = text.split('\n');
  const wrappedParagraphs = paragraphs.map(para => {
    const words = para.split(' ');
    let currentLine = '';
    const lines = [];
    
    words.forEach(word => {
      if (!word) return;
      if (currentLine.length + word.length + (currentLine ? 1 : 0) <= maxLen) {
        currentLine += (currentLine ? ' ' : '') + word;
      } else {
        if (currentLine) {
          lines.push(currentLine);
        }
        let remaining = word;
        while (remaining.length > maxLen) {
          lines.push(remaining.substring(0, maxLen));
          remaining = remaining.substring(maxLen);
        }
        currentLine = remaining;
      }
    });
    if (currentLine) {
      lines.push(currentLine);
    }
    return lines.join('\n');
  });
  return wrappedParagraphs.join('\n');
}

// Tokenizer for SVG path strings
function tokenizeSVGPath(d) {
  const regex = /([a-df-zzA-DF-ZZ])|([-+]?(?:\d*\.\d+|\d+)(?:[eE][-+]?\d+)?)/g;
  const matches = [...d.matchAll(regex)];
  return matches.map(m => {
    if (m[1]) return { type: 'command', value: m[1] };
    return { type: 'number', value: parseFloat(m[2]) };
  });
}

// Parser that converts SVG path coordinates to opentype commands
function parseSVGPathToOpentype(d, path, drawX, drawY, size, imgW, imgH) {
  const tokens = tokenizeSVGPath(d);
  let i = 0;
  let cx = 0;
  let cy = 0;
  let startX = 0;
  let startY = 0;
  let lastCmd = '';
  
  function mapX(x) {
    return drawX + (x / imgW) * size;
  }
  
  function mapY(y) {
    return drawY + (1 - (y / imgH)) * size;
  }
  
  while (i < tokens.length) {
    let token = tokens[i];
    let cmd = '';
    if (token.type === 'command') {
      cmd = token.value;
      i++;
    } else {
      cmd = lastCmd;
      if (cmd === 'M') cmd = 'L';
      else if (cmd === 'm') cmd = 'l';
    }
    
    if (!cmd) {
      i++;
      continue;
    }
    lastCmd = cmd;
    
    let consumed = false;
    if (cmd === 'M' || cmd === 'm') {
      if (i + 1 < tokens.length) {
        let x = tokens[i++].value;
        let y = tokens[i++].value;
        if (cmd === 'm') {
          x += cx;
          y += cy;
        }
        cx = x;
        cy = y;
        startX = x;
        startY = y;
        path.moveTo(mapX(cx), mapY(cy));
        consumed = true;
      }
    } else if (cmd === 'L' || cmd === 'l') {
      if (i + 1 < tokens.length) {
        let x = tokens[i++].value;
        let y = tokens[i++].value;
        if (cmd === 'l') {
          x += cx;
          y += cy;
        }
        cx = x;
        cy = y;
        path.lineTo(mapX(cx), mapY(cy));
        consumed = true;
      }
    } else if (cmd === 'H' || cmd === 'h') {
      if (i < tokens.length) {
        let x = tokens[i++].value;
        if (cmd === 'h') {
          x += cx;
        }
        cx = x;
        path.lineTo(mapX(cx), mapY(cy));
        consumed = true;
      }
    } else if (cmd === 'V' || cmd === 'v') {
      if (i < tokens.length) {
        let y = tokens[i++].value;
        if (cmd === 'v') {
          y += cy;
        }
        cy = y;
        path.lineTo(mapX(cx), mapY(cy));
        consumed = true;
      }
    } else if (cmd === 'Q' || cmd === 'q') {
      if (i + 3 < tokens.length) {
        let x1 = tokens[i++].value;
        let y1 = tokens[i++].value;
        let x = tokens[i++].value;
        let y = tokens[i++].value;
        if (cmd === 'q') {
          x1 += cx; y1 += cy;
          x += cx; y += cy;
        }
        cx = x;
        cy = y;
        path.quadraticCurveTo(mapX(x1), mapY(y1), mapX(cx), mapY(cy));
        consumed = true;
      }
    } else if (cmd === 'C' || cmd === 'c') {
      if (i + 5 < tokens.length) {
        let x1 = tokens[i++].value;
        let y1 = tokens[i++].value;
        let x2 = tokens[i++].value;
        let y2 = tokens[i++].value;
        let x = tokens[i++].value;
        let y = tokens[i++].value;
        if (cmd === 'c') {
          x1 += cx; y1 += cy;
          x2 += cx; y2 += cy;
          x += cx; y += cy;
        }
        cx = x;
        cy = y;
        path.curveTo(mapX(x1), mapY(y1), mapX(x2), mapY(y2), mapX(cx), mapY(cy));
        consumed = true;
      }
    } else if (cmd === 'Z' || cmd === 'z') {
      cx = startX;
      cy = startY;
      path.close();
      consumed = true;
    }
    
    if (!consumed) {
      // Skip unrecognized command arguments or invalid coordinate series to prevent hang
      while (i < tokens.length && tokens[i].type !== 'command') {
        i++;
      }
    }
  }
}

// Helper to reverse winding order of opentype.js Path commands for correct TrueType rendering
function reversePath(path) {
  const reversed = new opentype.Path();
  if (!path.commands || path.commands.length === 0) return reversed;
  
  // 1. Group commands into contours (starting with 'M')
  const contours = [];
  let currentContour = [];
  for (const cmd of path.commands) {
    if (cmd.type === 'M') {
      if (currentContour.length > 0) {
        contours.push(currentContour);
      }
      currentContour = [cmd];
    } else {
      currentContour.push(cmd);
    }
  }
  if (currentContour.length > 0) {
    contours.push(currentContour);
  }
  
  // 2. Reverse each contour individually
  for (const contour of contours) {
    if (contour.length === 0) continue;
    
    // Track start position for every command in the contour
    let cx = 0, cy = 0;
    const cmdInfo = contour.map(cmd => {
      const info = {
        cmd: cmd,
        startX: cx,
        startY: cy
      };
      
      if (cmd.type === 'M' || cmd.type === 'L') {
        cx = cmd.x;
        cy = cmd.y;
      } else if (cmd.type === 'Q') {
        cx = cmd.x;
        cy = cmd.y;
      } else if (cmd.type === 'C') {
        cx = cmd.x;
        cy = cmd.y;
      }
      return info;
    });
    
    const startCmd = contour[0];
    const contourStartX = startCmd.x;
    const contourStartY = startCmd.y;
    
    let endX = contourStartX;
    let endY = contourStartY;
    let hasZ = false;
    
    // Find the last actual coordinate command (before 'Z' if present)
    for (let i = contour.length - 1; i >= 0; i--) {
      const cmd = contour[i];
      if (cmd.type === 'Z') {
        hasZ = true;
      } else {
        endX = cmd.x;
        endY = cmd.y;
        break;
      }
    }
    
    // Move to the end coordinate to start the reversed path
    reversed.moveTo(endX, endY);
    
    // Retrace body commands in reverse direction
    const bodyCmds = cmdInfo.filter(info => info.cmd.type !== 'M' && info.cmd.type !== 'Z');
    for (let i = bodyCmds.length - 1; i >= 0; i--) {
      const info = bodyCmds[i];
      const cmd = info.cmd;
      const prevX = info.startX;
      const prevY = info.startY;
      
      if (cmd.type === 'L') {
        reversed.lineTo(prevX, prevY);
      } else if (cmd.type === 'Q') {
        reversed.quadraticCurveTo(cmd.x1, cmd.y1, prevX, prevY);
      } else if (cmd.type === 'C') {
        reversed.curveTo(cmd.x2, cmd.y2, cmd.x1, cmd.y1, prevX, prevY);
      }
    }
    
    if (hasZ) {
      reversed.close();
    }
  }
  
  return reversed;
}

// Trace image using ImageTracer.js and add mapped vectors to opentype path
function traceImageElementToPaths(img, path, drawX, drawY, size) {
  if (!img) return;
  
  // 1. Draw image to temporary canvas at 128x128 resolution for balanced trace performance/quality
  const tempCanvas = document.createElement('canvas');
  const ctx = tempCanvas.getContext('2d');
  const w = 128;
  const h = 128;
  tempCanvas.width = w;
  tempCanvas.height = h;
  
  // Clear canvas for transparency
  ctx.clearRect(0, 0, w, h);
  
  // Draw the image/canvas on top
  ctx.drawImage(img, 0, 0, w, h);
  
  const imgData = ctx.getImageData(0, 0, w, h);
  const data = imgData.data;
  
  // Check if image has transparency/alpha channel
  let hasAlpha = false;
  for (let i = 3; i < data.length; i += 4) {
    if (data[i] < 250) {
      hasAlpha = true;
      break;
    }
  }
  
  // Binarize pixels (transparent/light to white, dark to black) to make tracing robust
  if (hasAlpha) {
    for (let i = 0; i < data.length; i += 4) {
      const a = data[i+3];
      // Keep solid black if visible enough, otherwise transparent becomes white
      if (a >= 50) {
        data[i] = 0;       // R
        data[i+1] = 0;     // G
        data[i+2] = 0;     // B
        data[i+3] = 255;   // A
      } else {
        data[i] = 255;     // R
        data[i+1] = 255;   // G
        data[i+2] = 255;   // B
        data[i+3] = 255;   // A
      }
    }
  } else {
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i+1];
      const b = data[i+2];
      // Calculate relative luminance / brightness
      const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
      if (brightness > 128) {
        data[i] = 255;     // R
        data[i+1] = 255;   // G
        data[i+2] = 255;   // B
        data[i+3] = 255;   // A
      } else {
        data[i] = 0;       // R
        data[i+1] = 0;     // G
        data[i+2] = 0;     // B
        data[i+3] = 255;   // A
      }
    }
  }
  ctx.putImageData(imgData, 0, 0);
  
  // 2. Run ImageTracer on binarized data
  const options = {
    ltres: 1,
    qtres: 1,
    pathomit: 0,
    colorsampling: 0,
    numberofcolors: 2,
    mincolorratio: 0.02,
    roundcoords: 1
  };
  const svgStr = ImageTracer.imagedataToSVG(imgData, options);
  
  // 3. Parse path tags
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgStr, 'image/svg+xml');
  const paths = doc.querySelectorAll('path');
  
  paths.forEach(p => {
    const d = p.getAttribute('d');
    if (d) {
      // Background outline check: skip paths that span the entire bounds (0,0) and (128,128)
      const dLower = d.toLowerCase();
      const hasTopLeft = dLower.includes('0 0') || dLower.includes('0,0');
      const hasBottomRight = dLower.includes('128 128') || dLower.includes('128,128');
      if (hasTopLeft && hasBottomRight) {
        return; // Skip background layer
      }
      const tempPath = new opentype.Path();
      parseSVGPathToOpentype(d, tempPath, drawX, drawY, size, w, h);
      const reversedTemp = reversePath(tempPath);
      path.commands.push(...reversedTemp.commands);
    }
  });
}

// Trace glyph character using ImageTracer.js and add mapped vectors to opentype path
function traceGlyphCharacterToPaths(char, fontFamily, path, drawX, drawY, size) {
  if (!char) return;
  const tempCanvas = document.createElement('canvas');
  const ctx = tempCanvas.getContext('2d');
  const w = 128;
  const h = 128;
  tempCanvas.width = w;
  tempCanvas.height = h;
  
  // Clear canvas to ensure alpha channel is present
  ctx.clearRect(0, 0, w, h);
  
  // Draw black text centered
  ctx.fillStyle = '#000000';
  ctx.font = `bold 128px ${fontFamily}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(char, w / 2, h / 2);
  
  const imgData = ctx.getImageData(0, 0, w, h);
  const data = imgData.data;
  
  // Characters drawn on transparent background are binarized using alpha channel
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i+3];
    if (a >= 50) {
      data[i] = 0;       // R
      data[i+1] = 0;     // G
      data[i+2] = 0;     // B
      data[i+3] = 255;   // A
    } else {
      data[i] = 255;     // R
      data[i+1] = 255;   // G
      data[i+2] = 255;   // B
      data[i+3] = 255;   // A
    }
  }
  ctx.putImageData(imgData, 0, 0);
  
  // Run ImageTracer
  const options = {
    ltres: 1,
    qtres: 1,
    pathomit: 0,
    colorsampling: 0,
    numberofcolors: 2,
    mincolorratio: 0.02,
    roundcoords: 1
  };
  const svgStr = ImageTracer.imagedataToSVG(imgData, options);
  
  // Parse path tags
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgStr, 'image/svg+xml');
  const paths = doc.querySelectorAll('path');
  
  paths.forEach(p => {
    const d = p.getAttribute('d');
    if (d) {
      // Background outline check: skip paths that span the entire bounds (0,0) and (128,128)
      const dLower = d.toLowerCase();
      const hasTopLeft = dLower.includes('0 0') || dLower.includes('0,0');
      const hasBottomRight = dLower.includes('128 128') || dLower.includes('128,128');
      if (hasTopLeft && hasBottomRight) {
        return; // Skip background layer
      }
      const tempPath = new opentype.Path();
      parseSVGPathToOpentype(d, tempPath, drawX, drawY, size, w, h);
      const reversedTemp = reversePath(tempPath);
      path.commands.push(...reversedTemp.commands);
    }
  });
}

// Generate centered SVG representation data
function generateSVGData(text, settings) {
  const lines = text.split('\n');
  const maxLineLength = Math.max(1, ...lines.map(l => l.length));
  
  const charWidthHeight = settings.cellSize;
  const letterSpacing = settings.letterSpacing;
  const lineSpacing = settings.lineSpacing;
  const outerMargin = 40;
  
  const blockWidth = maxLineLength * (charWidthHeight + letterSpacing) - letterSpacing;
  const blockHeight = lines.length * (charWidthHeight + lineSpacing) - lineSpacing;
  
  const totalWidth = blockWidth + 2 * outerMargin;
  const totalHeight = blockHeight + 2 * outerMargin;
  
  const finalW = Math.max(200, totalWidth);
  const finalH = Math.max(300, totalHeight);
  
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${finalW}" height="${finalH}" viewBox="0 0 ${finalW} ${finalH}">\n`;
  svg += `  <rect width="100%" height="100%" fill="${settings.bg}" />\n`;
  
  // Vertically center block
  const startY = (finalH - blockHeight) / 2;
  
  lines.forEach((line, lineIdx) => {
    const chars = line.split('');
    const L = chars.length;
    const lineWidth = L * (charWidthHeight + letterSpacing) - letterSpacing;
    
    // Horizontally center line
    const startX = (finalW - lineWidth) / 2;
    
    chars.forEach((char, charIdx) => {
      const charX = startX + charIdx * (charWidthHeight + letterSpacing);
      const charY = startY + lineIdx * (charWidthHeight + lineSpacing);
      
      let binary = BITYPE_ALPHABET[char.toUpperCase()];
      if (!binary) {
        binary = (char === " ") ? new Array(16).fill(0) : new Array(16).fill(1);
      }
      
      const matrixCellSize = charWidthHeight / 4;
      const padding = settings.cellPadding;
      
      // 1. Draw cell backgrounds
      if (settings.cellBg) {
        for (let i = 0; i < 16; i++) {
          const row = Math.floor(i / 4);
          const col = i % 4;
          const cellX = charX + col * matrixCellSize;
          const cellY = charY + row * matrixCellSize;
          svg += `  <rect x="${cellX}" y="${cellY}" width="${matrixCellSize}" height="${matrixCellSize}" fill="${settings.cellBgColor}" />\n`;
        }
      }
      
      // 2. Draw active/inactive shapes
      for (let i = 0; i < 16; i++) {
        const row = Math.floor(i / 4);
        const col = i % 4;
        const cellX = charX + col * matrixCellSize;
        const cellY = charY + row * matrixCellSize;
        
        const drawX = cellX + padding;
        const drawY = cellY + padding;
        const size = matrixCellSize - 2 * padding;
        
        if (size <= 0) continue;
        
        const bit = binary[i];
        
        if (settings.representationMode === 'default') {
          if (bit === 1) {
            const stemW = size * settings.stemRatio;
            const barX = drawX + (size - stemW) / 2;
            svg += `  <rect x="${barX}" y="${drawY}" width="${stemW}" height="${size}" fill="${settings.color1}" />\n`;
          } else {
            const cx = drawX + size / 2;
            const cy = drawY + size / 2;
            const R = size / 2;
            const r = Math.max(0, R * (1 - settings.stemRatio * 1.5));
            svg += `  <path d="M ${cx} ${cy - R} A ${R} ${R} 0 1 0 ${cx} ${cy + R} A ${R} ${R} 0 1 0 ${cx} ${cy - R} Z M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx} ${cy + r} A ${r} ${r} 0 1 1 ${cx} ${cy - r} Z" fill="${settings.color0}" fill-rule="evenodd" />\n`;
          }
        } 
        else if (settings.representationMode === 'glyphs') {
          const charSymbol = bit === 1 ? settings.glyph1 : settings.glyph0;
          const color = bit === 1 ? settings.color1 : settings.color0;
          const tx = drawX + size / 2;
          const ty = drawY + size / 2 + (size * 0.1);
          svg += `  <text x="${tx}" y="${ty}" fill="${color}" font-family="${settings.fontFamily.replace(/'/g, "")}" font-size="${size}px" font-weight="bold" text-anchor="middle" dominant-baseline="middle">${charSymbol}</text>\n`;
        } 
        else if (settings.representationMode === 'images') {
          const bitImg = bit === 1 ? settings.img1 : settings.img0;
          if (bitImg) {
            const offscreen = bit === 1 ? offscreenImgCanvas1 : offscreenImgCanvas0;
            const dataUrl = offscreen.toDataURL("image/png");
            svg += `  <image x="${drawX}" y="${drawY}" width="${size}" height="${size}" href="${dataUrl}" />\n`;
          } else {
            const fallbackColor = bit === 1 ? settings.color1 : settings.color0;
            if (bit === 1) {
              svg += `  <rect x="${drawX}" y="${drawY}" width="${size}" height="${size}" fill="${fallbackColor}" />\n`;
            } else {
              svg += `  <circle cx="${drawX + size / 2}" cy="${drawY + size / 2}" r="${size / 2}" fill="${fallbackColor}" />\n`;
            }
          }
        }
      }
      
      // 3. Draw inner borders
      if (settings.innerBorders) {
        for (let i = 0; i < 16; i++) {
          const row = Math.floor(i / 4);
          const col = i % 4;
          const cellX = charX + col * matrixCellSize;
          const cellY = charY + row * matrixCellSize;
          svg += `  <rect x="${cellX}" y="${cellY}" width="${matrixCellSize}" height="${matrixCellSize}" fill="none" stroke="${settings.borderColor}" stroke-width="${settings.borderWidth}" />\n`;
        }
      }
      
      // 4. Draw outer border
      if (settings.outerBorders) {
        svg += `  <rect x="${charX}" y="${charY}" width="${charWidthHeight}" height="${charWidthHeight}" fill="none" stroke="${settings.borderColor}" stroke-width="${settings.borderWidth}" />\n`;
      }
    });
  });
  
  svg += `</svg>`;
  return { svg, width: finalW, height: finalH };
}

// Render sample text to canvas with scale (centered and wrapped)
function renderTextToCanvas(canvas, settings, text, scale = 1.0) {
  const ctx = canvas.getContext('2d');
  
  const wrappedText = wrapText(text, 20);
  const lines = wrappedText.split('\n');
  const maxLineLength = Math.max(1, ...lines.map(l => l.length));
  
  const charWidthHeight = settings.cellSize * scale; 
  const letterSpacing = settings.letterSpacing * scale;
  const lineSpacing = settings.lineSpacing * scale;
  const outerMargin = 40 * scale; 
  
  const blockWidth = maxLineLength * (charWidthHeight + letterSpacing) - letterSpacing;
  const blockHeight = lines.length * (charWidthHeight + lineSpacing) - lineSpacing;
  
  const totalWidth = blockWidth + 2 * outerMargin;
  const totalHeight = blockHeight + 2 * outerMargin;
  
  canvas.width = Math.max(200 * scale, totalWidth);
  canvas.height = Math.max((1200 / 4) * scale, totalHeight); 
  
  ctx.fillStyle = settings.bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  const scaledSettings = {
    ...settings,
    cellPadding: settings.cellPadding * scale,
    borderWidth: settings.borderWidth * scale
  };
  
  // Vertically center block
  const startY = (canvas.height - blockHeight) / 2;
  
  lines.forEach((line, lineIdx) => {
    const chars = line.split('');
    const L = chars.length;
    const lineWidth = L * (charWidthHeight + letterSpacing) - letterSpacing;
    
    // Horizontally center line
    const startX = (canvas.width - lineWidth) / 2;
    
    chars.forEach((char, charIdx) => {
      const charX = startX + charIdx * (charWidthHeight + letterSpacing);
      const charY = startY + lineIdx * (charWidthHeight + lineSpacing);
      
      drawCharCell(ctx, char, charX, charY, charWidthHeight, scaledSettings);
    });
  });
}

// Draw the header logo representation on canvas
function drawHeaderLogo() {
  const canvas = DOM.logoCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  const grid = [
    [1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1],
    [1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0],
    [1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1],
    [1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0],
    [1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1]
  ];
  
  const rows = grid.length;
  const cols = grid[0].length;
  const cellSize = Math.floor(canvas.height / rows);
  const offsetX = Math.floor((canvas.width - cols * cellSize) / 2);
  
  ctx.fillStyle = '#ffffff';
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        ctx.fillRect(offsetX + c * cellSize, r * cellSize, cellSize - 1, cellSize - 1);
      }
    }
  }
}

// Show processing loading overlay with optional custom text message
function showProcessing(message) {
  const overlay = DOM.processingOverlay;
  const textEl = DOM.processingText;
  if (overlay) {
    if (textEl && message) {
      textEl.textContent = message;
    }
    overlay.style.display = 'flex';
  }
}

// Hide processing loading overlay
function hideProcessing() {
  const overlay = DOM.processingOverlay;
  if (overlay) {
    overlay.style.display = 'none';
  }
}

// Render the Creator Text in the SVG live preview
function drawCreatorText() {
  const text = wrapText(DOM.sampleText.value.toUpperCase(), 20);
  const settings = STATE.settings;
  
  const result = generateSVGData(text, settings);
  const svgContainer = DOM.editorSvgContainer;
  if (svgContainer) {
    svgContainer.innerHTML = result.svg;
    
    const zoom = settings.zoom || 1.0;
    if (DOM.canvasContainer.classList.contains('fit-mode')) {
      svgContainer.style.width = "";
      svgContainer.style.height = "";
    } else {
      svgContainer.style.width = (result.width * zoom) + "px";
      svgContainer.style.height = (result.height * zoom) + "px";
      
      const svgEl = svgContainer.querySelector('svg');
      if (svgEl) {
        svgEl.style.position = 'absolute';
        svgEl.style.left = '0';
        svgEl.style.top = '0';
        svgEl.style.width = result.width + "px";
        svgEl.style.height = result.height + "px";
        svgEl.style.transform = `scale(${zoom})`;
        svgEl.style.transformOrigin = 'top left';
      }
    }
  }
}

// Caches and colors uploaded image on offscreen canvas
function cacheUploadedImage(img, isActive) {
  const settings = STATE.settings;
  const canvas = isActive ? offscreenImgCanvas1 : offscreenImgCanvas0;
  const ctx = canvas.getContext('2d');
  const color = isActive ? settings.color1 : settings.color0;
  const size = 512;
  
  canvas.width = size;
  canvas.height = size;
  ctx.clearRect(0, 0, size, size);
  ctx.drawImage(img, 0, 0, size, size);
  
  ctx.globalCompositeOperation = 'source-atop';
  ctx.fillStyle = color;
  ctx.globalAlpha = settings.tintOpacity;
  ctx.fillRect(0, 0, size, size);
  ctx.globalAlpha = 1.0;
  ctx.globalCompositeOperation = 'source-over';
}

function reCacheImages() {
  if (STATE.settings.img1) cacheUploadedImage(STATE.settings.img1, true);
  if (STATE.settings.img0) cacheUploadedImage(STATE.settings.img0, false);
}

// -------------------------------------------------------------
// SETTINGS / CONTROL INTERACTION
// -------------------------------------------------------------
function updateUIFromState() {
  const s = STATE.settings;
  
  // Geometry Inputs
  DOM.inputCellSize.value = s.cellSize;
  DOM.valCellSize.textContent = s.cellSize;
  
  DOM.inputCellPadding.value = s.cellPadding;
  DOM.valCellPadding.textContent = s.cellPadding;
  
  DOM.inputLetterSpacing.value = s.letterSpacing;
  DOM.valLetterSpacing.textContent = s.letterSpacing;
  
  DOM.inputLineSpacing.value = s.lineSpacing;
  DOM.valLineSpacing.textContent = s.lineSpacing;
  
  // Colors
  DOM.colorBg.value = s.bg;
  DOM.hexBg.textContent = s.bg;
  
  DOM.colorGlyph1.value = s.color1;
  DOM.hexGlyph1.textContent = s.color1;
  
  DOM.colorGlyph0.value = s.color0;
  DOM.hexGlyph0.textContent = s.color0;
  
  // Borders & Fill
  DOM.toggleOuterBorders.checked = s.outerBorders;
  DOM.toggleInnerBorders.checked = s.innerBorders;
  DOM.toggleCellBg.checked = s.cellBg;
  
  DOM.colorBorder.value = s.borderColor;
  DOM.hexBorder.textContent = s.borderColor;
  
  DOM.colorCellBg.value = s.cellBgColor;
  DOM.hexCellBg.textContent = s.cellBgColor;
  
  DOM.inputBorderWidth.value = s.borderWidth;
  DOM.valBorderWidth.textContent = s.borderWidth;
  
  // Tab panels toggle sub border
  const borderSub = document.getElementById('borders-settings-panel');
  if (s.outerBorders || s.innerBorders || s.cellBg) {
    borderSub.classList.add('active');
  } else {
    borderSub.classList.remove('active');
  }
  
  if (s.cellBg) {
    DOM.colCellBgColor.style.display = "block";
  } else {
    DOM.colCellBgColor.style.display = "none";
  }
  
  // Tint Opacity
  DOM.inputTintOpacity.value = s.tintOpacity;
  DOM.valTintOpacity.textContent = s.tintOpacity.toFixed(2);
  
  // Ratio
  DOM.inputStemRatio.value = s.stemRatio;
  DOM.valStemRatio.textContent = s.stemRatio;
  
  // Glyph tab values
  DOM.selectFontFamily.value = s.fontFamily;
  DOM.inputGlyph1.value = s.glyph1;
  DOM.inputGlyph0.value = s.glyph0;
  
  // Set tab buttons active status
  DOM.tabBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-tab') === `tab-${s.representationMode === 'default' ? 'default' : s.representationMode === 'glyphs' ? 'glyphs' : 'images'}`) {
      btn.classList.add('active');
    }
  });
  
  DOM.tabPanes.forEach(pane => {
    pane.classList.remove('active');
    if (pane.id === `tab-${s.representationMode === 'default' ? 'default' : s.representationMode === 'glyphs' ? 'glyphs' : 'images'}`) {
      pane.classList.add('active');
    }
  });
  
  // Text area length counter
  const charLen = DOM.sampleText.value.replace(/\n/g, '').length;
  DOM.charCounter.textContent = `${charLen} character${charLen === 1 ? '' : 's'}`;
  
  // Render presets swatches list to highlight active one
  renderPresetSwatches();
}

function initControlListeners() {
  // Helpers to bind input sliders
  const bindSlider = (input, valSpan, stateKey) => {
    input.addEventListener('input', () => {
      STATE.settings[stateKey] = parseFloat(input.value);
      valSpan.textContent = input.value;
      STATE.activePresetId = ""; // Break preset association
      drawCreatorText();
    });
  };
  
  bindSlider(DOM.inputCellSize, DOM.valCellSize, 'cellSize');
  bindSlider(DOM.inputCellPadding, DOM.valCellPadding, 'cellPadding');
  bindSlider(DOM.inputLetterSpacing, DOM.valLetterSpacing, 'letterSpacing');
  bindSlider(DOM.inputLineSpacing, DOM.valLineSpacing, 'lineSpacing');
  bindSlider(DOM.inputStemRatio, DOM.valStemRatio, 'stemRatio');
  bindSlider(DOM.inputBorderWidth, DOM.valBorderWidth, 'borderWidth');
  
  // Color controls
  const bindColor = (input, hexSpan, stateKey) => {
    input.addEventListener('input', () => {
      STATE.settings[stateKey] = input.value;
      hexSpan.textContent = input.value;
      STATE.activePresetId = ""; // Break preset association
      
      // If we are in image mode, we must re-cache images with the updated hue overlays
      if (stateKey === 'color1' || stateKey === 'color0') {
        reCacheImages();
      }
      
      drawCreatorText();
    });
  };
  
  bindColor(DOM.colorBg, DOM.hexBg, 'bg');
  bindColor(DOM.colorGlyph1, DOM.hexGlyph1, 'color1');
  bindColor(DOM.colorGlyph0, DOM.hexGlyph0, 'color0');
  bindColor(DOM.colorBorder, DOM.hexBorder, 'borderColor');
  bindColor(DOM.colorCellBg, DOM.hexCellBg, 'cellBgColor');
  
  // Border Toggles
  DOM.toggleOuterBorders.addEventListener('change', () => {
    STATE.settings.outerBorders = DOM.toggleOuterBorders.checked;
    STATE.activePresetId = "";
    updateUIFromState();
    drawCreatorText();
  });
  
  DOM.toggleInnerBorders.addEventListener('change', () => {
    STATE.settings.innerBorders = DOM.toggleInnerBorders.checked;
    STATE.activePresetId = "";
    updateUIFromState();
    drawCreatorText();
  });
  
  DOM.toggleCellBg.addEventListener('change', () => {
    STATE.settings.cellBg = DOM.toggleCellBg.checked;
    STATE.activePresetId = "";
    updateUIFromState();
    drawCreatorText();
  });
  
  // Tint Opacity Slider
  DOM.inputTintOpacity.addEventListener('input', () => {
    STATE.settings.tintOpacity = parseFloat(DOM.inputTintOpacity.value);
    DOM.valTintOpacity.textContent = STATE.settings.tintOpacity.toFixed(2);
    STATE.activePresetId = "";
    if (STATE.settings.img1 || STATE.settings.img0) {
      reCacheImages();
    }
    drawCreatorText();
  });
  
  // Text area inputs
  DOM.sampleText.addEventListener('input', () => {
    updateUIFromState();
    drawCreatorText();
  });
  
  DOM.btnClearText.addEventListener('click', () => {
    DOM.sampleText.value = "";
    updateUIFromState();
    drawCreatorText();
  });
  
  DOM.btnToggleFit.addEventListener('click', () => {
    DOM.canvasContainer.classList.toggle('fit-mode');
    DOM.btnToggleFit.classList.toggle('active');
    drawCreatorText();
  });
  
  // Zoom slider event listener
  DOM.inputZoom.addEventListener('input', () => {
    STATE.settings.zoom = parseFloat(DOM.inputZoom.value);
    DOM.valZoom.textContent = Math.round(STATE.settings.zoom * 100) + "%";
    DOM.canvasContainer.classList.remove('fit-mode');
    DOM.btnToggleFit.classList.remove('active');
    drawCreatorText();
  });
  
  // Tab panels navigation
  DOM.tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modeId = btn.getAttribute('data-tab').replace('tab-', '');
      STATE.settings.representationMode = modeId === 'default' ? 'default' : modeId === 'glyphs' ? 'glyphs' : 'images';
      STATE.activePresetId = "";
      
      if (STATE.settings.representationMode === 'images') {
        reCacheImages();
      }
      
      updateUIFromState();
      drawCreatorText();
    });
  });
  
  // Font selector & Glyph text inputs
  DOM.selectFontFamily.addEventListener('change', () => {
    STATE.settings.fontFamily = DOM.selectFontFamily.value;
    STATE.activePresetId = "";
    drawCreatorText();
  });
  
  if (DOM.fontUpload) {
    DOM.fontUpload.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        DOM.fontUploadName.textContent = file.name;
        
        const reader = new FileReader();
        reader.onload = async (event) => {
          try {
            const arrayBuffer = event.target.result;
            const customFontFamily = `uploaded_font_${Date.now()}`;
            
            const fontFace = new FontFace(customFontFamily, arrayBuffer);
            const loadedFace = await fontFace.load();
            document.fonts.add(loadedFace);
            
            const opt = document.createElement('option');
            opt.value = customFontFamily;
            opt.textContent = `Uploaded: ${file.name.substring(0, 15)}`;
            DOM.selectFontFamily.appendChild(opt);
            DOM.selectFontFamily.value = customFontFamily;
            
            STATE.settings.fontFamily = customFontFamily;
            STATE.activePresetId = "";
            
            drawCreatorText();
          } catch (err) {
            alert("Failed to load uploaded font file: " + err.message);
          }
        };
        reader.readAsArrayBuffer(file);
      }
    });
  }
  
  DOM.inputGlyph1.addEventListener('input', () => {
    const val = DOM.inputGlyph1.value;
    const char = val ? [...val][0] : "1";
    DOM.inputGlyph1.value = char;
    STATE.settings.glyph1 = char;
    STATE.activePresetId = "";
    drawCreatorText();
  });
  DOM.inputGlyph0.addEventListener('input', () => {
    const val = DOM.inputGlyph0.value;
    const char = val ? [...val][0] : "0";
    DOM.inputGlyph0.value = char;
    STATE.settings.glyph0 = char;
    STATE.activePresetId = "";
    drawCreatorText();
  });
  

  
  // File upload logic
  DOM.fileGlyph1.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      STATE.settings.img1Name = file.name;
      DOM.infoGlyph1.textContent = file.name;
      
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          STATE.settings.img1 = img;
          cacheUploadedImage(img, true);
          drawCreatorText();
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  
  DOM.fileGlyph0.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      STATE.settings.img0Name = file.name;
      DOM.infoGlyph0.textContent = file.name;
      
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          STATE.settings.img0 = img;
          cacheUploadedImage(img, false);
          drawCreatorText();
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  
  DOM.btnResetImages.addEventListener('click', () => {
    STATE.settings.img1 = null;
    STATE.settings.img0 = null;
    STATE.settings.img1Name = "";
    STATE.settings.img0Name = "";
    DOM.infoGlyph1.textContent = "No file selected";
    DOM.infoGlyph0.textContent = "No file selected";
    DOM.fileGlyph1.value = "";
    DOM.fileGlyph0.value = "";
    drawCreatorText();
  });
}

// -------------------------------------------------------------
// PRESET SYSTEM MANAGEMENT (LOCALSTORAGE)
// -------------------------------------------------------------
function applyPreset(presetData, id) {
  // Set settings from preset data
  const s = STATE.settings;
  s.bg = presetData.bg;
  s.color1 = presetData.color1;
  s.color0 = presetData.color0;
  
  // Support both new detailed border properties and legacy 'borders' property
  s.outerBorders = presetData.outerBorders !== undefined ? presetData.outerBorders : (presetData.borders !== undefined ? presetData.borders : true);
  s.innerBorders = presetData.innerBorders !== undefined ? presetData.innerBorders : (presetData.borders !== undefined ? presetData.borders : false);
  s.cellBg = presetData.cellBg !== undefined ? presetData.cellBg : false;
  s.cellBgColor = presetData.cellBgColor || "#121212";
  
  s.borderColor = presetData.borderColor || "#222222";
  s.borderWidth = presetData.borderWidth || 1;
  s.stemRatio = presetData.stemRatio || 0.25;
  s.representationMode = presetData.mode || "default";
  
  STATE.activePresetId = id;
  
  // Rebuild image caches if in image mode
  if (s.representationMode === 'images') {
    reCacheImages();
  }
  
  updateUIFromState();
  drawCreatorText();
}

function renderPresetSwatches() {
  DOM.presetsSwatches.innerHTML = "";
  
  // Draw system presets
  Object.keys(PRESETS).forEach(key => {
    const preset = PRESETS[key];
    const swatch = document.createElement('div');
    swatch.className = `preset-swatch ${STATE.activePresetId === key ? 'active' : ''}`;
    
    // Draw 2x2 miniature grid using background colors
    swatch.innerHTML = `
      <div class="preset-mini-grid">
        <div class="preset-mini-cell" style="background-color: ${preset.color1}"></div>
        <div class="preset-mini-cell" style="background-color: ${preset.bg}"></div>
        <div class="preset-mini-cell" style="background-color: ${preset.bg}"></div>
        <div class="preset-mini-cell" style="background-color: ${preset.color0}"></div>
      </div>
      <span class="preset-name-lbl">${preset.name.split(' ')[1]}</span>
    `;
    
    swatch.addEventListener('click', () => {
      applyPreset(preset, key);
    });
    
    DOM.presetsSwatches.appendChild(swatch);
  });
  
  // Draw custom presets
  DOM.customPresetsSwatches.innerHTML = "";
  
  const customKeys = Object.keys(STATE.customPresets);
  if (customKeys.length === 0) {
    DOM.customPresetsSwatches.innerHTML = `<div class="info-box m-0 w-100" style="text-align: center; border-style: dashed; padding: 0.5rem;">NO CUSTOM PRESETS SAVED</div>`;
  }
  
  customKeys.forEach(key => {
    const preset = STATE.customPresets[key];
    
    const wrapper = document.createElement('div');
    wrapper.className = "custom-preset-wrapper";
    
    const swatch = document.createElement('div');
    swatch.className = `preset-swatch w-100 ${STATE.activePresetId === key ? 'active' : ''}`;
    
    swatch.innerHTML = `
      <div class="preset-mini-grid">
        <div class="preset-mini-cell" style="background-color: ${preset.color1}"></div>
        <div class="preset-mini-cell" style="background-color: ${preset.bg}"></div>
        <div class="preset-mini-cell" style="background-color: ${preset.bg}"></div>
        <div class="preset-mini-cell" style="background-color: ${preset.color0}"></div>
      </div>
      <span class="preset-name-lbl">${preset.name}</span>
    `;
    
    swatch.addEventListener('click', () => {
      applyPreset(preset, key);
    });
    
    // Delete custom preset button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = "btn-delete-preset";
    deleteBtn.innerHTML = '<i class="ti ti-x"></i>';
    deleteBtn.title = "Delete Preset";
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm(`Delete preset "${preset.name}"?`)) {
        delete customPreset(key);
      }
    });
    
    wrapper.appendChild(swatch);
    wrapper.appendChild(deleteBtn);
    DOM.customPresetsSwatches.appendChild(wrapper);
  });
}

function saveCustomPreset() {
  const nameInput = DOM.customPresetName.value.trim().toUpperCase();
  if (!nameInput) {
    alert("Please enter a name for the custom preset.");
    return;
  }
  
  const presetId = "custom_" + Date.now();
  const s = STATE.settings;
  
  const newPreset = {
    name: nameInput,
    bg: s.bg,
    color1: s.color1,
    color0: s.color0,
    outerBorders: s.outerBorders,
    innerBorders: s.innerBorders,
    cellBg: s.cellBg,
    cellBgColor: s.cellBgColor,
    borderColor: s.borderColor,
    borderWidth: s.borderWidth,
    stemRatio: s.stemRatio,
    mode: s.representationMode
  };
  
  STATE.customPresets[presetId] = newPreset;
  localStorage.setItem("bitype_custom_presets", JSON.stringify(STATE.customPresets));
  
  DOM.customPresetName.value = "";
  STATE.activePresetId = presetId;
  
  renderPresetSwatches();
}

function customPreset(key) {
  delete STATE.customPresets[key];
  localStorage.setItem("bitype_custom_presets", JSON.stringify(STATE.customPresets));
  if (STATE.activePresetId === key) {
    STATE.activePresetId = "";
  }
  renderPresetSwatches();
}

function initPresets() {
  // Load from localStorage
  const saved = localStorage.getItem("bitype_custom_presets");
  if (saved) {
    try {
      STATE.customPresets = JSON.parse(saved);
    } catch(e) {
      STATE.customPresets = {};
    }
  }
  
  // Bind save button
  DOM.btnSavePreset.addEventListener('click', saveCustomPreset);
  
  // Initially load BnW system preset
  applyPreset(PRESETS.bnw, "bnw");
}

// -------------------------------------------------------------
// SVG EXPORT IMPLEMENTATION
// -------------------------------------------------------------
function generateSVGString() {
  const text = wrapText(DOM.sampleText.value.toUpperCase(), 20);
  const settings = STATE.settings;
  const result = generateSVGData(text, settings);
  return result.svg;
}

function initExportListeners() {
  // High-Resolution PNG Download
  DOM.btnExportPng.addEventListener('click', () => {
    const tempCanvas = document.createElement('canvas');
    const text = DOM.sampleText.value.toUpperCase();
    const settings = STATE.settings;
    
    renderTextToCanvas(tempCanvas, settings, text, 4.0);
    
    const url = tempCanvas.toDataURL("image/png");
    const a = document.createElement('a');
    a.href = url;
    a.download = `bitype_render_highres_${Date.now()}.png`;
    a.click();
  });
  
  // SVG Download
  DOM.btnExportSvg.addEventListener('click', () => {
    const svgStr = generateSVGString();
    const blob = new Blob([svgStr], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bitype_vector_${Date.now()}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  });
  
  // TTF Download
  DOM.btnExportTtf.addEventListener('click', () => {
    showProcessing("GENERATING CUSTOM TTF FONT...");
    setTimeout(() => {
      try {
        compileTTF();
      } finally {
        hideProcessing();
      }
    }, 100);
  });
  
  // Full specimen sheets exports
  DOM.btnExportSheetPng.addEventListener('click', () => {
    showProcessing("GENERATING PNG SPECIMEN SHEET...");
    setTimeout(() => {
      try {
        exportFullSheetPNG();
      } finally {
        hideProcessing();
      }
    }, 100);
  });
  
  DOM.btnExportSheetSvg.addEventListener('click', () => {
    showProcessing("GENERATING SVG SPECIMEN SHEET...");
    setTimeout(() => {
      try {
        exportFullSheetSVG();
      } finally {
        hideProcessing();
      }
    }, 100);
  });
}

// Helper to draw a hollow rectangle contour for opentype.js
function drawHollowRect(path, x1, y1, x2, y2, b) {
  // Outer rect (clockwise)
  path.moveTo(x1, y2);
  path.lineTo(x2, y2);
  path.lineTo(x2, y1);
  path.lineTo(x1, y1);
  path.close();
  
  // Inner rect (counter-clockwise)
  path.moveTo(x1 + b, y2 - b);
  path.lineTo(x1 + b, y1 + b);
  path.lineTo(x2 - b, y1 + b);
  path.lineTo(x2 - b, y2 - b);
  path.close();
}

// Helper to draw a circle contour for opentype.js (clockwise or counter-clockwise)
function drawCirclePath(path, cx, cy, r, clockwise) {
  const kappa = 0.5522847;
  
  if (clockwise) {
    path.moveTo(cx, cy - r);
    path.curveTo(cx + r * kappa, cy - r, cx + r, cy - r * kappa, cx + r, cy);
    path.curveTo(cx + r, cy + r * kappa, cx + r * kappa, cy + r, cx, cy + r);
    path.curveTo(cx - r * kappa, cy + r, cx - r, cy + r * kappa, cx - r, cy);
    path.curveTo(cx - r, cy - r * kappa, cx - r * kappa, cy - r, cx, cy - r);
    path.close();
  } else {
    path.moveTo(cx, cy - r);
    path.curveTo(cx - r * kappa, cy - r, cx - r, cy - r * kappa, cx - r, cy);
    path.curveTo(cx - r, cy + r * kappa, cx - r * kappa, cy + r, cx, cy + r);
    path.curveTo(cx + r * kappa, cy + r, cx + r, cy + r * kappa, cx + r, cy);
    path.curveTo(cx + r, cy - r * kappa, cx + r * kappa, cy - r, cx, cy - r);
    path.close();
  }
}

// Helper to build glyph path for TTF compilation
function buildTTFPath(binary, settings) {
  const path = new opentype.Path();
  const b = 200 * (settings.borderWidth / settings.cellSize);
  const pad = 200 * (settings.cellPadding / settings.cellSize);
  
  // Draw inner cell borders (if enabled)
  if (settings.innerBorders) {
    for (let i = 0; i < 16; i++) {
      const row = Math.floor(i / 4);
      const col = i % 4;
      const cellX = 100 + col * 200;
      const cellY = (3 - row) * 200;
      
      // Draw cell border
      drawHollowRect(path, cellX, cellY, cellX + 200, cellY + 200, b);
    }
  }
  
  // Draw outer border (if enabled)
  if (settings.outerBorders) {
    drawHollowRect(path, 100, 0, 900, 800, b);
  }
  
  // Draw glyph active/inactive cell shapes
  for (let i = 0; i < 16; i++) {
    const row = Math.floor(i / 4);
    const col = i % 4;
    const cellX = 100 + col * 200;
    const cellY = (3 - row) * 200;
    
    const drawX = cellX + pad;
    const drawY = cellY + pad;
    const size = 200 - 2 * pad;
    
    if (size > 0) {
      const bit = binary[i];
      
      if (settings.representationMode === 'images') {
        const img = bit === 1 ? settings.img1 : settings.img0;
        if (img) {
          traceImageElementToPaths(img, path, drawX, drawY, size);
        } else {
          // Fallback to solid square or circle if no image uploaded
          if (bit === 1) {
            path.moveTo(drawX, drawY + size);
            path.lineTo(drawX + size, drawY + size);
            path.lineTo(drawX + size, drawY);
            path.lineTo(drawX, drawY);
            path.close();
          } else {
            drawCirclePath(path, drawX + size / 2, drawY + size / 2, size / 2, true);
          }
        }
      } else if (settings.representationMode === 'glyphs') {
        const char = bit === 1 ? settings.glyph1 : settings.glyph0;
        traceGlyphCharacterToPaths(char, settings.fontFamily, path, drawX, drawY, size);
      } else {
        if (bit === 1) {
          // Draw vertical bar (clockwise)
          const stemW = size * settings.stemRatio;
          const barLeft = drawX + (size - stemW) / 2;
          const barRight = barLeft + stemW;
          
          path.moveTo(barLeft, drawY + size);
          path.lineTo(barRight, drawY + size);
          path.lineTo(barRight, drawY);
          path.lineTo(barLeft, drawY);
          path.close();
        } else {
          // Draw concentric circle ring
          const cx = drawX + size / 2;
          const cy = drawY + size / 2;
          const R = size / 2;
          const r = Math.max(0, R * (1 - settings.stemRatio * 1.5));
          
          // Draw outer circle (clockwise)
          drawCirclePath(path, cx, cy, R, true);
          
          // Draw inner circle hole (counter-clockwise)
          if (r > 0) {
            drawCirclePath(path, cx, cy, r, false);
          }
        }
      }
    }
  }
  return path;
}

// Client-side TTF compiler using opentype.js
function compileTTF() {
  const settings = STATE.settings;
  
  // Read font name from UI and sanitize
  const rawFontName = (DOM.inputFontName && DOM.inputFontName.value.trim()) || "BiType Custom";
  const sanitizedFontName = rawFontName.replace(/[^a-zA-Z0-9\s\-_]/g, '') || "BiType Custom";
  const filename = sanitizedFontName.replace(/\s+/g, '_');
  
  const glyphs = [];
  const processedUnicodes = new Set();
  
  // 1. Create the mandatory Notdef glyph (glyph index 0) - defined as all ones
  const notdefBinary = new Array(16).fill(1);
  const notdefPath = buildTTFPath(notdefBinary, settings);
  const notdefGlyph = new opentype.Glyph({
    name: '.notdef',
    advanceWidth: 1000,
    path: notdefPath
  });
  glyphs.push(notdefGlyph);
  
  // Helper to add a glyph safely with a fresh path
  function addGlyph(name, unicode, binary) {
    if (processedUnicodes.has(unicode)) return;
    processedUnicodes.add(unicode);
    
    const path = buildTTFPath(binary, settings);
    const glyph = new opentype.Glyph({
      name: name,
      unicode: unicode,
      advanceWidth: 1000,
      path: path
    });
    glyphs.push(glyph);
  }
  
  // 2. Add space explicitly to ensure it is defined as all zeros
  const spaceBinary = BITYPE_ALPHABET[" "] || new Array(16).fill(0);
  addGlyph("space", 32, spaceBinary);
  
  // 3. Loop through all characters in BITYPE_ALPHABET
  for (const char in BITYPE_ALPHABET) {
    const binary = BITYPE_ALPHABET[char];
    const upperChar = char.toUpperCase();
    const lowerChar = char.toLowerCase();
    
    const upperUnicode = upperChar.charCodeAt(0);
    const lowerUnicode = lowerChar.charCodeAt(0);
    
    // Add uppercase glyph
    addGlyph(upperChar === " " ? "space" : upperChar, upperUnicode, binary);
    
    // Add lowercase glyph (mapped to same binary pattern)
    if (upperChar >= 'A' && upperChar <= 'Z') {
      addGlyph(lowerChar, lowerUnicode, binary);
    }
  }
  
  // 4. Create the Font object
  const fontPsName = sanitizedFontName.replace(/\s+/g, '') + '-Regular';
  const font = new opentype.Font({
    familyName: sanitizedFontName,
    styleName: 'Regular',
    unitsPerEm: 1000,
    ascender: 800,
    descender: -200,
    glyphs: glyphs
  });
  
  // Explicitly assign names to avoid falling back to "Custom Custom"
  font.names = {
    fontFamily: { en: sanitizedFontName },
    fontSubfamily: { en: 'Regular' },
    fullName: { en: sanitizedFontName + ' Regular' },
    postScriptName: { en: fontPsName },
    preferredFamily: { en: sanitizedFontName },
    preferredSubfamily: { en: 'Regular' }
  };
  
  // 5. Download TTF
  const buffer = font.toArrayBuffer();
  const blob = new Blob([buffer], { type: 'font/opentype' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${filename}.ttf`;
  a.click();
  URL.revokeObjectURL(url);
}

// Export Full Character Specimen Sheet as PNG
function exportFullSheetPNG() {
  const settings = STATE.settings;
  const sheetChars = Object.keys(BITYPE_ALPHABET).filter(c => c !== " ");
  
  const tempCanvas = document.createElement('canvas');
  const ctx = tempCanvas.getContext('2d');
  
  const glyphSize = 96;
  const captionHeight = 24;
  const gap = 24;
  const margin = 45;
  const cols = 8;
  const rows = Math.ceil(sheetChars.length / cols);
  
  const totalWidth = 2 * margin + cols * glyphSize + (cols - 1) * gap;
  const totalHeight = 2 * margin + rows * (glyphSize + captionHeight) + (rows - 1) * gap;
  
  tempCanvas.width = totalWidth;
  tempCanvas.height = totalHeight;
  
  // Draw background
  ctx.fillStyle = settings.bg;
  ctx.fillRect(0, 0, totalWidth, totalHeight);
  
  const scale = glyphSize / settings.cellSize;
  
  const scaledSettings = {
    ...settings,
    cellPadding: settings.cellPadding * scale,
    borderWidth: settings.borderWidth * scale,
    cellSize: glyphSize
  };
  
  sheetChars.forEach((char, idx) => {
    const colIdx = idx % cols;
    const rowIdx = Math.floor(idx / cols);
    
    const x = margin + colIdx * (glyphSize + gap);
    const y = margin + rowIdx * (glyphSize + captionHeight + gap);
    
    // Draw glyph
    drawCharCell(ctx, char, x, y, glyphSize, scaledSettings);
    
    // Draw caption label
    ctx.fillStyle = settings.color1;
    ctx.font = "bold 12px 'Space Mono', monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(char, x + glyphSize / 2, y + glyphSize + 6);
  });
  
  // Download
  const url = tempCanvas.toDataURL("image/png");
  const a = document.createElement('a');
  a.href = url;
  a.download = `bitype_specimen_sheet_${Date.now()}.png`;
  a.click();
}

// Export Full Character Specimen Sheet as SVG
function exportFullSheetSVG() {
  const settings = STATE.settings;
  const sheetChars = Object.keys(BITYPE_ALPHABET).filter(c => c !== " ");
  
  const glyphSize = 96;
  const captionHeight = 24;
  const gap = 24;
  const margin = 45;
  const cols = 8;
  const rows = Math.ceil(sheetChars.length / cols);
  
  const totalWidth = 2 * margin + cols * glyphSize + (cols - 1) * gap;
  const totalHeight = 2 * margin + rows * (glyphSize + captionHeight) + (rows - 1) * gap;
  
  let svg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n`;
  svg += `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${totalHeight}" viewBox="0 0 ${totalWidth} ${totalHeight}">\n`;
  svg += `  <rect width="100%" height="100%" fill="${settings.bg}" />\n`;
  
  const scale = glyphSize / settings.cellSize;
  
  sheetChars.forEach((char, idx) => {
    const colIdx = idx % cols;
    const rowIdx = Math.floor(idx / cols);
    
    const x = margin + colIdx * (glyphSize + gap);
    const y = margin + rowIdx * (glyphSize + captionHeight + gap);
    
    let binary = BITYPE_ALPHABET[char];
    if (!binary) binary = new Array(16).fill(0);
    
    const matrixCellSize = glyphSize / 4;
    const padding = settings.cellPadding * scale;
    
    // 1. Draw cell backgrounds (if enabled)
    if (settings.cellBg) {
      for (let i = 0; i < 16; i++) {
        const row = Math.floor(i / 4);
        const col = i % 4;
        const cellX = x + col * matrixCellSize;
        const cellY = y + row * matrixCellSize;
        svg += `  <rect x="${cellX}" y="${cellY}" width="${matrixCellSize}" height="${matrixCellSize}" fill="${settings.cellBgColor}" />\n`;
      }
    }
    
    // 2. Draw active/inactive shapes
    for (let i = 0; i < 16; i++) {
      const row = Math.floor(i / 4);
      const col = i % 4;
      const cellX = x + col * matrixCellSize;
      const cellY = y + row * matrixCellSize;
      
      const drawX = cellX + padding;
      const drawY = cellY + padding;
      const size = matrixCellSize - 2 * padding;
      
      if (size <= 0) continue;
      
      const bit = binary[i];
      
      if (settings.representationMode === 'default') {
        if (bit === 1) {
          const stemW = size * settings.stemRatio;
          const barX = drawX + (size - stemW) / 2;
          svg += `  <rect x="${barX}" y="${drawY}" width="${stemW}" height="${size}" fill="${settings.color1}" />\n`;
        } else {
          const cx = drawX + size / 2;
          const cy = drawY + size / 2;
          const R = size / 2;
          const r = Math.max(0, R * (1 - settings.stemRatio * 1.5));
          svg += `  <path d="M ${cx} ${cy - R} A ${R} ${R} 0 1 0 ${cx} ${cy + R} A ${R} ${R} 0 1 0 ${cx} ${cy - R} Z M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx} ${cy + r} A ${r} ${r} 0 1 1 ${cx} ${cy - r} Z" fill="${settings.color0}" fill-rule="evenodd" />\n`;
        }
      } 
      else if (settings.representationMode === 'glyphs') {
        const charSymbol = bit === 1 ? settings.glyph1 : settings.glyph0;
        const color = bit === 1 ? settings.color1 : settings.color0;
        const tx = drawX + size / 2;
        const ty = drawY + size / 2 + (size * 0.1);
        svg += `  <text x="${tx}" y="${ty}" fill="${color}" font-family="${settings.fontFamily.replace(/'/g, "")}" font-size="${size}px" font-weight="bold" text-anchor="middle" dominant-baseline="middle">${charSymbol}</text>\n`;
      } 
      else if (settings.representationMode === 'images') {
        const bitImg = bit === 1 ? settings.img1 : settings.img0;
        if (bitImg) {
          const offscreen = bit === 1 ? offscreenImgCanvas1 : offscreenImgCanvas0;
          const dataUrl = offscreen.toDataURL("image/png");
          svg += `  <image x="${drawX}" y="${drawY}" width="${size}" height="${size}" href="${dataUrl}" />\n`;
        } else {
          const fallbackColor = bit === 1 ? settings.color1 : settings.color0;
          if (bit === 1) {
            svg += `  <rect x="${drawX}" y="${drawY}" width="${size}" height="${size}" fill="${fallbackColor}" />\n`;
          } else {
            svg += `  <circle cx="${drawX + size / 2}" cy="${drawY + size / 2}" r="${size / 2}" fill="${fallbackColor}" />\n`;
          }
        }
      }
    }
    
    // 3. Draw inner borders (if enabled)
    if (settings.innerBorders) {
      for (let i = 0; i < 16; i++) {
        const row = Math.floor(i / 4);
        const col = i % 4;
        const cellX = x + col * matrixCellSize;
        const cellY = y + row * matrixCellSize;
        svg += `  <rect x="${cellX}" y="${cellY}" width="${matrixCellSize}" height="${matrixCellSize}" fill="none" stroke="${settings.borderColor}" stroke-width="${settings.borderWidth * scale}" />\n`;
      }
    }
    
    // 4. Draw outer border (if enabled)
    if (settings.outerBorders) {
      svg += `  <rect x="${x}" y="${y}" width="${glyphSize}" height="${glyphSize}" fill="none" stroke="${settings.borderColor}" stroke-width="${settings.borderWidth * scale}" />\n`;
    }
    
    // 5. Draw label
    const lx = x + glyphSize / 2;
    const ly = y + glyphSize + 16;
    svg += `  <text x="${lx}" y="${ly}" fill="${settings.color1}" font-family="Space Mono, monospace" font-size="12px" font-weight="bold" text-anchor="middle">${char}</text>\n`;
  });
  
  svg += `</svg>`;
  
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `bitype_specimen_sheet_${Date.now()}.svg`;
  a.click();
  URL.revokeObjectURL(url);
}

// -------------------------------------------------------------
// PAGE 2: THE FONT SPECIMENWEIGHTS & HOVER MAP
// -------------------------------------------------------------
const FONT_WEIGHT_MAP = {
  "1": { name: "Thin", font: "BiType_Thin" },
  "2": { name: "Light", font: "BiType_Light" },
  "3": { name: "Regular", font: "BiType_Regular" },
  "4": { name: "Bold", font: "BiType_Bold" },
  "5": { name: "Base", font: "BiType_Base" },
  "6": { name: "Matrix", font: "BiType_Matrix" }
};

function initFontPageLogic() {
  // 1. Weight Slider Interaction
  const updateSpecimenWeight = (weightIndex) => {
    const mapped = FONT_WEIGHT_MAP[weightIndex];
    
    // Update labels classes
    DOM.weightLabels.forEach(lbl => {
      lbl.classList.remove('active');
      if (lbl.getAttribute('data-weight') === mapped.name) {
        lbl.classList.add('active');
      }
    });
    
    DOM.specimenInputEdit.style.display = "block";
    DOM.specimenWeightText.textContent = DOM.specimenInputEdit.value || "BITYPE SYSTEM";
    DOM.specimenWeightText.style.fontFamily = `'${mapped.font}', var(--font-mono)`;
  };
  
  DOM.weightSlider.addEventListener('input', () => {
    updateSpecimenWeight(DOM.weightSlider.value);
  });
  
  DOM.weightLabels.forEach(label => {
    label.addEventListener('click', () => {
      const name = label.getAttribute('data-weight');
      const idx = Object.keys(FONT_WEIGHT_MAP).find(key => FONT_WEIGHT_MAP[key].name === name);
      if (idx) {
        DOM.weightSlider.value = idx;
        updateSpecimenWeight(idx);
      }
    });
  });
  
  // Custom Specimen textarea test
  DOM.specimenInputEdit.addEventListener('input', (e) => {
    // Keep it sync
    DOM.specimenWeightText.textContent = e.target.value || "BITYPE SYSTEM";
  });

  // Use Installed Font click listener
  DOM.btnUseInstalledFont.addEventListener('click', () => {
    const fontName = DOM.inputInstalledFont.value.trim();
    if (!fontName) {
      alert("Please enter a system font name.");
      return;
    }
    
    // Remove active state from all weight labels
    DOM.weightLabels.forEach(lbl => lbl.classList.remove('active'));
    
    // Apply font family directly to the specimen board
    DOM.specimenWeightText.style.fontFamily = `'${fontName}', var(--font-mono)`;
    
    // Ensure input textarea is visible (if it was hidden by Matrix mode)
    DOM.specimenInputEdit.style.display = "block";
    DOM.specimenWeightText.textContent = DOM.specimenInputEdit.value || "BITYPE SYSTEM";
  });
  
  // 2. Interactive Character Hover Map
  const characters = Object.keys(BITYPE_ALPHABET);
  DOM.charactersListGrid.innerHTML = "";
  
  // Generate character grid cells
  characters.forEach(char => {
    const btn = document.createElement('div');
    btn.className = "map-char-btn";
    btn.textContent = char === " " ? "␣" : char;
    
    btn.addEventListener('mouseenter', () => {
      highlightCharacterInMap(char);
    });
    
    btn.addEventListener('click', () => {
      // Toggle active states
      document.querySelectorAll('.map-char-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      highlightCharacterInMap(char);
    });
    
    DOM.charactersListGrid.appendChild(btn);
  });
  
  // Highlight default 'A' character on load
  highlightCharacterInMap('A');
  const defaultBtn = [...DOM.charactersListGrid.children].find(child => child.textContent === 'A');
  if (defaultBtn) defaultBtn.classList.add('active');
}

function highlightCharacterInMap(char) {
  DOM.analysisChar.textContent = char === " " ? "SPACE" : char;
  
  const binary = BITYPE_ALPHABET[char.toUpperCase()];
  if (!binary) return;
  
  // Update raw array string
  DOM.analysisRawBinary.textContent = `[${binary.join(',')}]`;
  
  // Update grid elements in Sidebar
  DOM.analysisGrid.innerHTML = "";
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.className = `visualizer-cell ${binary[i] === 1 ? 'active' : ''}`;
    DOM.analysisGrid.appendChild(cell);
  }
  
  // Update 4x4 layout pre formatted text
  let matrixText = "";
  for (let r = 0; r < 4; r++) {
    matrixText += binary.slice(r * 4, r * 4 + 4).join("  ") + "\n";
  }
  DOM.analysisMatrixText.textContent = matrixText;
}

// -------------------------------------------------------------
// PAGE 3: ABOUT INTERACTIVE DIAGRAM LAB
// -------------------------------------------------------------
const aboutGridState = new Array(16).fill(0);

function initAboutGridLab() {
  DOM.aboutGrid.innerHTML = "";
  
  for (let i = 0; i < 16; i++) {
    const btn = document.createElement('button');
    btn.className = "grid-cell-btn";
    btn.setAttribute('data-index', i);
    
    btn.addEventListener('click', () => {
      // Toggle cell state
      aboutGridState[i] = aboutGridState[i] === 1 ? 0 : 1;
      btn.classList.toggle('active');
      updateAboutMetrics();
    });
    
    DOM.aboutGrid.appendChild(btn);
  }
  
  DOM.aboutBtnClear.addEventListener('click', () => {
    aboutGridState.fill(0);
    document.querySelectorAll('.grid-cell-btn').forEach(btn => btn.classList.remove('active'));
    updateAboutMetrics();
  });
  
  updateAboutMetrics();
}

function updateAboutMetrics() {
  DOM.aboutBinaryArray.textContent = `[${aboutGridState.join(',')}]`;
  
  const filled = aboutGridState.filter(c => c === 1).length;
  DOM.aboutFilledCells.textContent = `${filled} / 16`;
  
  // Estimate weight based on filled ratio
  let weight = "THIN";
  if (filled > 12) {
    weight = "BLACK";
  } else if (filled > 8) {
    weight = "BOLD";
  } else if (filled > 4) {
    weight = "REGULAR";
  } else if (filled > 2) {
    weight = "LIGHT";
  } else if (filled === 0) {
    weight = "EMPTY";
  }
  DOM.aboutEstimatedWeight.textContent = weight;
}

// -------------------------------------------------------------
// GLYPH DESIGNER PANEL IMPLEMENTATION
// -------------------------------------------------------------
function populateDesignerCharSelect() {
  const select = DOM.designerCharSelect;
  if (!select) return;
  
  select.innerHTML = "";
  const chars = Object.keys(BITYPE_ALPHABET);
  chars.forEach(char => {
    const opt = document.createElement('option');
    opt.value = char;
    opt.textContent = char === " " ? "SPACE (␣)" : `CHAR '${char}'`;
    select.appendChild(opt);
  });
  
  if (BITYPE_ALPHABET['A']) {
    select.value = 'A';
  }
}

function renderDesignerGrid() {
  const container = DOM.designerGrid;
  const select = DOM.designerCharSelect;
  if (!container || !select) return;
  
  const activeChar = select.value;
  const binary = BITYPE_ALPHABET[activeChar];
  
  container.innerHTML = "";
  if (!binary) return;
  
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.className = `designer-cell ${binary[i] === 1 ? 'active' : ''}`;
    cell.setAttribute('data-index', i);
    
    cell.addEventListener('click', () => {
      binary[i] = binary[i] === 1 ? 0 : 1;
      cell.classList.toggle('active');
      drawCreatorText();
      
      const currentInspectChar = DOM.analysisChar.textContent === "SPACE" ? " " : DOM.analysisChar.textContent;
      if (currentInspectChar === activeChar) {
        highlightCharacterInMap(activeChar);
      }
    });
    
    container.appendChild(cell);
  }
}

function initDesignerListeners() {
  DOM.designerCharSelect.addEventListener('change', () => {
    renderDesignerGrid();
  });
  
  DOM.btnDesignerReset.addEventListener('click', () => {
    const activeChar = DOM.designerCharSelect.value;
    if (DEFAULT_BITYPE_ALPHABET[activeChar]) {
      BITYPE_ALPHABET[activeChar] = [...DEFAULT_BITYPE_ALPHABET[activeChar]];
      renderDesignerGrid();
      drawCreatorText();
      
      const currentInspectChar = DOM.analysisChar.textContent === "SPACE" ? " " : DOM.analysisChar.textContent;
      if (currentInspectChar === activeChar) {
        highlightCharacterInMap(activeChar);
      }
    }
  });
  
  DOM.btnDesignerExport.addEventListener('click', () => {
    const dataStr = JSON.stringify(BITYPE_ALPHABET, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bitype_alphabet.json`;
    a.click();
    URL.revokeObjectURL(url);
  });
  
  DOM.designerImportFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      showProcessing("IMPORTING ALPHABET JSON...");
      setTimeout(() => {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const imported = JSON.parse(event.target.result);
            let valid = true;
            for (let key in imported) {
              if (!Array.isArray(imported[key]) || imported[key].length !== 16) {
                valid = false;
                break;
              }
            }
            if (!valid) {
              alert("Invalid JSON format. Must be a mapping of character keys to 16-element binary arrays.");
              return;
            }
            
            for (let key in imported) {
              BITYPE_ALPHABET[key] = imported[key];
            }
            
            renderDesignerGrid();
            drawCreatorText();
            
            const currentInspectChar = DOM.analysisChar.textContent === "SPACE" ? " " : DOM.analysisChar.textContent;
            if (currentInspectChar && BITYPE_ALPHABET[currentInspectChar]) {
              highlightCharacterInMap(currentInspectChar);
            }
            
            alert("BiType alphabet mappings imported successfully!");
          } catch(err) {
            alert("Error parsing JSON file: " + err.message);
          } finally {
            hideProcessing();
          }
        };
        reader.readAsText(file);
      }, 100);
    }
  });
}

// -------------------------------------------------------------
// INITIALIZATION
// -------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  // 1. Draw header logo
  drawHeaderLogo();

  // 2. Setup system navigation routing
  initRouting();
  
  // 3. Bind events for inputs & settings
  initControlListeners();
  
  // 4. Load saved presets & setup swatches
  initPresets();
  
  // 5. Connect downloads & vectors exporter
  initExportListeners();
  
  // 6. Connect page 2 layout specimen hover maps
  initFontPageLogic();
  
  // 7. Connect page 3 interactive grids lab
  initAboutGridLab();
  
  // 7.5. Initialize glyph designer
  populateDesignerCharSelect();
  renderDesignerGrid();
  initDesignerListeners();
  
  // 8. Trigger Initial Draw of Creator Canvas text
  drawCreatorText();
});
