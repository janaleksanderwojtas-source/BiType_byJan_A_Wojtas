# PROJECT_LOG.md: BiType Typography Web App Development History

This log provides a comprehensive chronological record of the development of the **BiType** speculative typeface designer from its initial concept with Claude to the current Gemini session (including Revision 16).

**Estimated Total Project Hours:** 79 hours

> [!NOTE]
> **Log Overview Notes (Total: 79 Hours):**
> The BiType project has evolved across sixteen distinct design versions, divided into two major phases:
> 1. **Claude Phase (Revisions 1 to 10 - 54 Hours)**: Established the core 16-bit grid font logic, opentype.js compiler, and SVG tracing engines.
> 2. **Gemini Phase (Revisions 11 to 16 - 25 Hours)**: Added the SPA splash landing page, the 5-step Guided Builder, compact layouts, GPU-accelerated non-freezing loader overlays, custom font-swapping hover states, the interactive minimal glitchy Matrix rain backdrop, and isolated Guided Builder warning skip flags.

---

## Part I: Claude Development Phase (Revisions 1 - 10)
*Conceptualized and built with the assistance of Claude*  
*Total Section Hours: 54 hours (including friend testing: 6-8 hours)*

### [Revision 1] - 2026-05-18 // Concept & Analytical Framework
- **Duration**: 3.0 Hours
- **Actions**: Established the speculative design thesis for a campus intervention project on data exposure/surveillance.
- **Impl**: Created the **Data Exposure Analytical Framework** document outlining the core concept, visual strategy, and 8-slide presentation structure. Defined the target audience and location mapping for poster installations.
- **Output**: Comprehensive critical design brief and analytical framework saved.

### [Revision 2] - 2026-05-19 // BiType Typeface Concept Definition
- **Duration**: 4.0 Hours
- **Actions**: Conceptualized the **BiType** typeface system based on binary grid logic.
- **Impl**: Developed the core mathematical structure: 4×4 grid (16 cells), binary mapping (1 = vertical line/stem, 0 = circle/ring), and the three-layer framework (base variable font + letter combinations + web generator).
- **Output**: Named the system "BiType" (binary, 2×2 grid reference, dual typeface layers). Created initial alphabet JSON with all A-Z, 0-9, and punctuation mappings (41 characters total).

### [Revision 3] - 2026-05-19 // Interactive Glyph Editor (Widget)
- **Duration**: 5.0 Hours
- **Actions**: Built an interactive 4×4 grid editor for designing glyphs in real-time.
- **Impl**: Created a clickable grid interface allowing users to toggle cells on/off and see live preview. Added "Show JSON" and "Copy JSON" buttons for exporting glyph data. Included visible textarea for JSON output and copy-to-clipboard functionality.
- **Output**: Functional widget embedded in chat. Student used this to design all 39 letters (A-Z, 0-9, punctuation) of the BiType alphabet. Fixed download sandbox restrictions by adding visible textarea as workaround.

### [Revision 4] - 2026-05-20 // TrueType Font Generation (UFO → TTF)
- **Duration**: 7.0 Hours
- **Actions**: Created Python pipeline to generate valid OpenType/TrueType font files from glyph data.
- **Impl**: Used `defcon` (Unified Font Object library) and `fontmake` to convert JSON glyph arrays into actual font files. Set grid parameters: CELL_SIZE=200 units, LEFT_MARGIN=100, ADVANCE_WIDTH=1000, ASCENDER=800, DESCENDER=-200. Implemented vertical flip logic for correct glyph orientation.
- **Output**: Generated **BiType.ttf** (2.8 KB, 42 glyphs, valid OpenType format). Verified with fontTools. Added lowercase letter support (a-z map to uppercase glyphs).

### [Revision 5] - 2026-05-20 // Special Characters & Quotation Mark Variants
- **Duration**: 4.0 Hours
- **Actions**: Designed 12 special characters and attempted comma/quotation mark directional variants.
- **Impl**: Created editor for: : ; ( ) + - = _ * / & / backtick. Later attempted 8 comma variants („ top-left/right/bottom-left/right, ‚ top-left/right/bottom-left, NO GLYPH). Encountered encoding/Unicode mapping issues with double-comma character.
- **Output**: Successfully added 11 special characters to font. Comma variants failed due to OpenType unicode complexity (abandoned—user chose to focus on quotation marks instead, which also had integration issues).

### [Revision 6] - 2026-05-21 // SVG Image-to-Vector Conversion (Critical Feature)
- **Duration**: 6.0 Hours + 6-8 hours friend testing
- **Actions**: Integrated client-side image-to-vector tracing for custom glyph import.
- **Impl**: Built SVG tracing algorithm to convert uploaded images (JPG, PNG) into clean vector paths. Implemented contrast adjustment slider for real-time preview optimization. Vector traces map high-contrast areas to vector outlines suitable for font glyph rendering.
- **Output**: **BiType_Complete.ttf** with support for custom user-uploaded glyphs. Users can now upload two images → system traces them → generates complete font using those images as the "1" and "0" shapes. **Friend testing (6-8 hours)**: Refined the image tracing quality, contrast sensitivity, and vector rendering accuracy.

### [Revision 7] - 2026-05-21 // Font File Completion & Q Glyph Refinement
- **Duration**: 3.0 Hours
- **Actions**: Finalized the main alphabet, user requested redesign of Q glyph.
- **Impl**: Created dedicated Q glyph editor (same 4×4 grid interface). User redesigned Q from original to: `[1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1]`. Rebuilt complete font with new Q.
- **Output**: **BiType_Final.ttf** with corrected Q glyph. 87 total glyphs (A-Z, a-z, 0-9, punctuation, special characters). 4.9 KB filesize.

### [Revision 8] - 2026-05-22 // Web Application Planning (3-Page Architecture)
- **Duration**: 4.0 Hours
- **Actions**: Designed comprehensive 3-page website architecture.
- **Impl**: Planned page structure:
  - **Page 1 (About)**: Explain BiType concept, reference analytical framework
  - **Page 2 (Showcase)**: Display 4 preset styles (B&W, B&W Boxed, PCB/Motherboard, Matrix/Neon) with interactive sample text
  - **Page 3 (Creator)**: Custom glyph tool (upload 2 images/fonts → choose 2 glyphs → customize appearance → download TTF/PNG/SVG)
- **Output**: Complete specification for 3-page React-based SPA. Tech approach: client-side font generation, no backend required, deployable on Vercel/Netlify free tier.

### [Revision 9] - 2026-05-22 // Step-by-Step Builder Prompt (UI/UX Design)
- **Duration**: 5.0 Hours
- **Actions**: Created comprehensive prompt for step-by-step guided builder to simplify the overwhelming creator tool.
- **Impl**: Designed 5-step linear flow:
  1. Choose Your Glyphs (font vs. upload vs. draw)
  2. Upload/Confirm Glyph 1 (with SVG preview + contrast slider)
  3. Upload/Confirm Glyph 0 (with SVG preview + contrast slider)
  4. Customize Appearance (geometry, colors, live preview)
  5. Generate & Download (TTF/PNG/SVG options with honest format explanations)
- **Included**: Toggle advice system (⚠️ warnings, ℹ️ info, 💡 concepts), SVG preview validation, error handling, mobile responsiveness, microcopy examples, and concept reinforcement at every step.
- **Output**: 6,000+ character detailed specification document. Addressed the problem: overwhelming 20+ controls scattered across one page → guided journey with education baked in.

### [Revision 10] - 2026-05-22 // Documentation & IP Protection
- **Duration**: 3.0 Hours
- **Actions**: Created user-friendly explanations and set up legal IP protection.
- **Impl**: 
  - Rewrote technical explanation to be accessible (removed "bezier contours," "coordinate space," "binary logic"—replaced with "pick two shapes, arrange in 4×4 grid, get a font")
  - Created **CC BY-NC-SA 4.0 license** specification for the project
  - Documented paywall strategy (deferred—noted as future feature when traction appears, not immediate priority)
  - Created GitHub cleanup guide for removing duplicate files and version management via branches
- **Output**: Clear user-facing copy, legal framework, and implementation guides for future development phases. Project documented and ready for public use.

---

## Part II: Gemini Refinement Phase (Revisions 11 - 15)
*Refined, tested, and optimized with the assistance of Gemini*  
*Total Section Hours: 24 hours*

### [Revision 11] - 2026-05-23T10:16:00 // Workspace Layout & Rephrasing
- **Duration**: 6.0 Hours
- **Timestamp**: 2026-05-23T10:16:00+02:00
- **Process**: Refactored startup page and navigation flow.
- **Editions**:
  - Created a splash landing page (`#page-startup`) with large logo, subtitle, and cards.
  - Coded a 5-step Guided Builder flow wizard (`#page-guided`).
  - Added a "VECTOR OUTLINES" toggle switch in the Advanced Creator header.
  - Reordered the Advanced Creator panel: moved the specimen text area to the top of the workspace.
  - Replaced speculate text in footer with clicking issuu badge redirecting link.
  - Rephrased the About accordion to be playful, modern, and friendly. Updated bio photo path to `assets/jan.a.wojtas.jpg` and MIDI image path to `assets/ableton_screenshot.jpg`.
- **Status**: Completed & Verified.

### [Revision 12] - 2026-05-23T11:23:00 // Text Refinements & Layout Swap
- **Duration**: 4.5 Hours
- **Timestamp**: 2026-05-23T11:23:00+02:00
- **Process**: Unified layouts, loaders, and narratives.
- **Editions**:
  - Removed the bouncing DVD logo wrapper from the processing loader overlay.
  - Styled the bio photo wrapper to enforce original aspect ratio without square cropping.
  - Rewrote the **What is BiType** (01) and **The Grid is the Font** (05) accordions with exact custom definitions.
  - Updated the **About Me** (08) bio narrative with custom text (studied LCI Barcelona, Claude membership context).
  - Added selective bolding (`<strong>`) across all About accordion tabs.
  - Removed the obsolete bottom metadata line `16-bit 4x4 Grid` from the interactive grid diagram card.
  - Reordered Step 4 (Appearance) of the Guided Builder: placed the Options panel on the left and the Live Workspace Preview on the right.
  - Added advisory warnings to Step 5 (Generate) explaining CPU stuttering during TTF compile.
- **Status**: Completed & Verified.

### [Revision 13] - 2026-05-23T11:38:00 // Layout Compaction & GPU Animation
- **Duration**: 3.5 Hours
- **Timestamp**: 2026-05-23T11:38:00+02:00
- **Process**: Optimized layout spaces and loader performance.
- **Editions**:
  - Repositioned the Guided Step 4 specimen text textarea above the canvas preview and reduced canvas viewport height to `130px` to keep it compact and fit the screen.
  - Refactored the flashing checkerboard grid loader animations (`cellFlash`, `bit1Flash`, `bit0Flash`) in `style.css` to only animate `opacity` and promoted them to GPU compositor layers (`will-change: opacity`).
  - *Result*: The loader overlay continues to animate at 60fps even when opentype.js blocks the main JS thread.
- **Status**: Completed & Verified.

### [Revision 14] - 2026-05-23T12:06:00 // Grid Shrinking, TTF Fix, Hover Effects & Matrix Backdrop
- **Duration**: 5.5 Hours
- **Timestamp**: 2026-05-23T12:06:00+02:00
- **Process**: Polished responsiveness, modal triggers, and startup screen hover states.
- **Editions**:
  - Added `min-width: 0`, `max-width: 100%`, and padding adjustments on the canvas container and grid layouts, adapting width correctly to prevent horizontal viewport overflow.
  - Extracted the TTF export flow check to a shared `triggerTtfExportFlow()` function in `app.js`, eliminating programmatic hidden click issues and ensuring the warning modal and grid loader show and reset appropriately under all modes.
  - Created a dynamic hover state on the startup logo: when hovered, it swaps styles every 180ms, rendering the text "BITYPE" reconstructed using the binary cells but changing the font-family of the symbols dynamically (rotating Courier, Comic Sans, Papyrus, Georgia, etc.) and alternating the binary character glyphs.
  - Programmed a canvas Matrix rain backdrop (`#matrix-bg-canvas` using fixed viewport coordinate arrays) that gradually fades in with opacity `0.12` when the logo is hovered, and fades out when mouse leaves.
- **Status**: Completed & Verified.

### [Revision 15] - 2026-05-23T17:05:00 // Logo Hover Sizing, Matrix Font Expansion, Glitch Rain & Detailed Log Hours
- **Duration**: 4.5 Hours
- **Timestamp**: 2026-05-23T17:05:00+02:00
- **Process**: Added font-specific styles, loaded subfolder background fonts, and updated matrix backdrop with shape/text separation and glitch layers.
- **Editions**:
  - Registered the Comic Relief, Doto, and Ultra font-faces from `assets/FONTS_MATRIX_BG/Comic_Relief,Doto,Ultra` under the `BG_` prefix in `style.css`.
  - Reverted the startup logo hover font-family swapping animation so that the main title text remains static (preserving its font style `BiType_Matrix`) while getting slightly larger on hover via CSS scaling, and triggers the minimal glitchy background matrix backdrop rain.
  - Enhanced canvas Matrix rain backdrop: it now parses fonts to differentiate shape-based fonts (drawing characters `A-Z` and `0-9` which render as 4x4 matrix grid shapes) and standard text fonts (drawing binary `0` and `1`).
  - Added experimental minimalist glitch visual layers to the matrix canvas background: grayscale-only palette (no green), column jittering, horizontal chromatic aberration shifts, rare corrupted data blocks, and flickering matrix grid lines.
  - Polished the Matrix rain backdrop layout and speeds: reduced column spacing to `18px`, made character sizes uniform (13px standard / 16px highlight), stabilized particle speeds, and removed reset stutters so that falling characters flow smoothly and continuously without lag or delays.
  - Increased the visual dimensions of the bottom-left footer logo and flashing "CLICK ME!" link badge.
  - Versioned the skip warning localStorage key to `bitype_skip_ttf_warning_v2` to force the warning popup modal to display for existing users who previously selected "do not show this warning again".
  - Separated the TTF skip warning flag between image-based tracing mode (`bitype_skip_ttf_warning_images`) and standard typography modes, ensuring the popup always correctly displays when compiling custom uploaded images in the Guided Builder and Creator workspace.
- **Status**: Completed & Verified.

### [Revision 16] - 2026-05-23T17:50:00 // Guided Builder Warning Popups Isolation & Testing
- **Duration**: 1.0 Hour
- **Timestamp**: 2026-05-23T17:50:00+02:00
- **Process**: Isolated TTF warning popup skip state between Advanced Creator and Guided Builder.
- **Editions**:
  - Implemented guided-specific warning skip flags `bitype_skip_ttf_warning_guided_images` and `bitype_skip_ttf_warning_guided_v2` in `app.js` to ensure the warning popup displays in the Guided Builder with images even if opted out in the Advanced Creator.
  - Modified `triggerTtfExportFlow` and proceed button handlers in `initExportListeners` to respect the builder mode and toggle warning flags correctly.
  - Created a Playwright integration test (`test_guided_images_warning.py`) and ran it to verify the popups operate correctly under image-upload guided mode.
- **Status**: Completed & Verified.

