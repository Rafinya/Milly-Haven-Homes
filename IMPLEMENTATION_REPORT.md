# Milly Haven Homes — Implementation Report

Date: 2 November 2026
Site: static HTML/CSS/JS at repository root (no build step, no dependencies)
WhatsApp number preserved: +254 712 522 925

## 1. Restored features

- **Scroll-driven loft rising (homepage story).** `STORY_MOTION=true`, `.story{height:340vh}`, `.hint` visible again, rAF-throttled scroll mapping. Tower rotates 20°→350°, 8 floors rise in sync, captions switch at p≈0.34 and p≈0.68. Verified at p=0, 0.14, 0.37, 0.60, 0.83, 1.0.
- **Spinning loader logo + real progress bar.** Tower spins at the original `sp 3.4s`; floors drop in with `drop`. Bar is JS-driven and tracks the real document lifecycle (creeps to ~90% until DOMContentLoaded + minimum dwell, then completes). First load minimum 900 ms, internal navigation 400 ms. No fake 100%, no double loader, no black flash.
- **Reduced-motion handling corrected.** The previous global `animation/transition:0.01s` rule (which killed every animation on this Windows machine, where `prefers-reduced-motion: reduce` is true) was removed. Reduce now only stops `.mf-aurora` and `.live i`. Loader, logo float, reveals, contact ring and the hero video intentionally keep running.
- **Google Fonts made non-render-blocking** (preload/onload + noscript) so it no longer blocks script execution for ~800 ms and freezes the loader bar.
- **Hero emblem float** (`fl 8s`) restored.

## 2. New features

- **Immersive per-property photo tours** (`loft.html?p=<slug>`): sticky full-bleed stage, bedroom → sitting → kitchen → bathroom sequence, scroll-driven crossfade with preload of the next image, progress bar, counter, dots, captions, gallery, and a WhatsApp CTA. Invalid/unknown slug shows an honest "Photos are on their way" fallback with a WhatsApp CTA.
- **Cinematic homepage background video**: trimmed Millie BNB interior walkthrough, muted, autoplay, loop, playsinline, cover, poster, dark overlay, no distortion.
- **Real photographs on the stays list** for the Studio Loft and One-Bedroom Loft, with "Step inside" tour links; honest "photos on request" note for the two lofts without verified photos.
- **Nav internal-link handler** recognises `loft.html` and preserves query strings; modifier-clicks are respected.

## 3. Image → property mapping (verified, no guessing)

Source folder `Millie BNB` was left untouched. 14 of its 16 JPEGs were copied to `assets/photos/` with stable names.

### The One-Bedroom Loft (cream/yellow apartment, 13 landscape photos)
Tour (5 stops, in order):
1. Bedroom — `one-bed-bedroom.jpg` (from "7.38.48 AM.jpeg")
2. Sitting room — `one-bed-sitting.jpg` (from "7.38.52 AM (1).jpeg")
3. Dining corner — `one-bed-dining.jpg` (from "7.38.49 AM.jpeg")
4. Kitchen — `one-bed-kitchen.jpg` (from "7.38.56 AM.jpeg")
5. Bathroom — `one-bed-bathroom.jpg` (from "7.38.48 AM (1).jpeg")

Gallery (7 photos): `one-bed-living.jpg` (7.38.47 AM), `one-bed-bedroom-wardrobe.jpg` (7.38.47 AM (1)), `one-bed-sitting-wide.jpg` (7.38.50 AM (1)), `one-bed-sitting-tv.jpg` (7.38.50 AM), `one-bed-sitting-sofa.jpg` (7.38.52 AM), `one-bed-dining-sofa.jpg` (7.38.51 AM), `one-bed-kitchen-open.jpg` (7.38.54 AM).

### The Studio Loft (warm-evening apartment, 2 portrait photos) — PROVISIONAL
Tour (2 stops): `studio-bedroom.jpg` (10.10.18 AM), `studio-sitting.jpg` (10.10.19 AM). Only two verified photos exist; flagged as provisional in the UI ("photos on request").

### Not photographed (no verified images exist)
- The Family Loft — illustration + honest "photos on request" note.
- The Top-Floor Loft — illustration + honest "photos on request" note.

### Not used as a listing gallery
- `WhatsApp Video 2026-11-02 at 10.52.43 AM.mp4` (11.47 MB, 478×850, 54.5 s) is a **third, separate 1-bedroom unit** and is used only as the homepage background (trimmed), never as a listing photo set.

## 4. Video used

- Source: `Millie BNB/WhatsApp Video 2026-11-02 at 10.52.43 AM.mp4` (original, untouched).
- Delivered as: `assets/milly-haven-film.mp4` — headless-Chrome MediaRecorder trim (mp4/avc1, 1.6 Mbps) starting at the teal living room (t≈14.5 s) so it loops natively from frame 0. Duration 39.8 s, 478×850.
- Poster: `assets/milly-haven-poster.jpg` (frame at t≈14.56, 50,284 bytes).
- Reduced-motion / data-saver: decorative loops stop; the video still autoplays unless Save-Data or 2G/3G is detected, in which case only the poster is shown.

## 5. Files modified

- `home.html` — hero video source/poster, fonts non-blocking, encoding fixed.
- `stays.html` — fonts non-blocking.
- `why-us.html` — fonts non-blocking, encoding fixed.
- `contact.html` — fonts non-blocking, encoding fixed.
- `loft.html` — new property-tour shell (created), fonts non-blocking, encoding fixed.
- `css/style.css` — loader spin restored, story height 340vh, tour styles, reduced-motion scoped, card/tour spacing.
- `js/script.js` — STAYS data with verified photos, loader progress, story scroll, tour engine, video control, nav handler.
- `assets/photos/*` — 14 mapped photos (new).
- `assets/milly-haven-film.mp4` — trimmed hero film (new).
- `assets/milly-haven-poster.jpg` — hero poster (new).
- `Milly-Haven-Homes-Website.zip` — rebuilt (27 entries).

## 6. Outstanding issues

- No verified photographs exist for The Family Loft or The Top-Floor Loft — flagged in UI, not invented.
- The Studio Loft has only 2 verified photos — tour is 2 stops; flagged as provisional.
- Legacy unused files remain in the repo (`assets/milly-haven-loop.mp4`, `assets/video-poster.jpg`, `assets/video-poster.jpg`). They are excluded from the rebuilt zip but not deleted, per "do not overwrite originals" caution.
- The trimmed MP4 has no fast-start (moov at end) because headless Chrome MediaRecorder writes it that way; it loops correctly but the first play may wait for a few seconds of buffering on slow connections. No ffmpeg/ffprobe is installed to remux.
- The local Python static server does not support HTTP Range, so seeking is unreliable until fully buffered (a hosting environment with Range support resolves this).

## 7g. Loader logo removed (follow-up)

- Removed the Milly Haven Homes wordmark image from the loading screen (`#ld`) on all pages; the loader now shows only the spinning loft tower and the progress bar. Footer/header logos are unchanged.

## 7f. Wide-screen layout (follow-up)

- `.wrap` max-width widened from 1180px to 1440px (1680px at ≥1440px, 1880px at ≥1920px) with increased side padding, so content spreads across wide screens instead of bunching in the middle. `.trail` left/right offsets updated to match. Responsive audit: no horizontal overflow at any breakpoint.

## 7e. Transparent logo (follow-up)

- Found `Millie BNB/no background logo.png` (RGBA, 1536×1024) — a true transparent version of the gold emblem. Copied it to `assets/emblem.png`, `assets/emblem-gold.png`, `assets/wordmark.png`, and `assets/milly-haven-emblem.png`, replacing the solid-background PNGs.
- Removed the `mix-blend-mode: screen` workaround (no longer needed) so the emblem renders at its true colours.

## 7d. Logo background + fullscreen video (follow-up)

- The gold emblem PNG ships with a solid dark background. Since it has no alpha channel, added `mix-blend-mode: screen` to `img[data-e], img[data-w]` so the dark background disappears against the dark page and only the emblem shows (no background box), without editing the raster file.
- Hero video switched back to `object-fit: cover` (fullscreen, top-to-bottom) at `scale(1)` for a full-bleed background, keeping the 4 Mbps HQ source for clarity.

## 7c. Video clarity + zoom (follow-up)

- Re-encoded the hero film at 4 Mbps (up from 1.6 Mbps) by re-capturing the decoded frames through headless Chrome MediaRecorder: `assets/milly-haven-film.mp4` is now 19.6 MB / 39.8 s. This reduces compression artefacts; the source footage itself is 478×850 (WhatsApp-compressed) and cannot be turned into true 4K — the improvement is the best available from the supplied material.
- Zoomed out: `.hero-video video` changed from `object-fit:cover; transform:scale(1.015)` to `object-fit:contain; transform:scale(1)` so the full home frame is visible instead of being cropped to fill the landscape hero. `preload` switched to `auto` for full-quality loading.
- Poster unchanged (`assets/milly-haven-poster.jpg`, frame at t≈14.56).

## 7b. Rebrand to Milly Haven Homes (follow-up)

- Brand name changed from "Weena Loft" to "Milly Haven Homes" across all HTML pages, JS, and documentation (titles, nav, WhatsApp message templates, alt text, report).
- New logo: `Millie BNB/Milly Haven Homes Gold Emblem.png` (1536×1024) copied to `assets/emblem.png`, `assets/emblem-gold.png`, `assets/wordmark.png`, and `assets/milly-haven-emblem.png` (overwriting the old raster logos; originals in `Millie BNB` untouched).
- Two additional source photos copied (unverified, not assigned to any property tour, flagged): `assets/photos/milly-haven-facade.jpg` (building facade), `assets/photos/milly-haven-kit.jpg` (kitchen). They are NOT wired into any listing pending verification.
- Asset files renamed: `weena-loft-film.mp4` → `milly-haven-film.mp4`, `weena-film-poster.jpg` → `milly-haven-poster.jpg`; all references updated.
- Project folder renamed: `Weena Loft` → `Milly Haven Homes`. The old empty `Weena Loft` folder could not be removed because the host process holds a handle to it; it is empty and can be deleted manually.
- Shareable archive renamed: `Weena-Loft-Website.zip` → `Milly-Haven-Homes-Website.zip`.
- The animated `Gemini_Generated_Gif_eoncofeoncofeonc.gif` was left in `Millie BNB` and not wired in (intent unconfirmed).

## 7. Tests and results (post-rebrand)

- `node --check js/script.js` — PASS (no syntax errors).
- Loader smoke test (headless Chrome, 1440×900): bar `scaleX(0.24)` at 300 ms, `0.52` at 600 ms, `0.96` at 900 ms, loader class removed ~1.2 s, fully hidden ~1.8 s; spin `sp 3.4s` confirmed; no console errors.
- Story scroll test: p=0.14 → floors 0–1; p=0.37 → floors 0–4, caption 2; p=0.60 → floors 0–6; p=0.83 → all 8, caption 3; rotation 20°→350°. PASS.
- Stays page: 4 rows, 2 real-photo tours (studio, one-bed), 2 illustration rows with `row-note`, 4 tour links, images load. PASS.
- Tour test (`loft.html?p=one-bed`): 5 stages, captions in order, 7-photo gallery, counter 01–05, progress bar 0→1, crossfade switches at t≥0.78, no flicker. PASS.
- Studio tour (`loft.html?p=studio`): 2 stages. PASS.
- No-photo fallback (`loft.html?p=family`): "Photos are on their way" + WhatsApp CTA. PASS.
- Homepage video: `paused=false`, `muted=true`, `loop=true`, `t=3.51`, `dur=39.8`, src `milly-haven-film.mp4`, poster `milly-haven-poster.jpg`. PASS.
- Responsive audit (390/768/1280/1440/1920 × 5 pages): no horizontal overflow anywhere, no console errors, loaders all cleared. PASS.
- Encoding: all 5 HTML files now UTF-8 without BOM; `Select-String` for `â€|Ã|Â|U+FFFD` returns 0 matches. PASS.
- Video end test: reaches t=39.82 and fires `ended`. PASS.
- ZIP rebuild: 27 entries, 9.7 MB, verified by reading back. PASS.
