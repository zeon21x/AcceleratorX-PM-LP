# AcceleratorX AI Product Management — Antigravity Project

## Files
- `index.html` — the exact HTML source uploaded for this project, preserved without redesign or content changes.
- `AI_PM_Nano_Degree_Brochure.pdf` — brochure referenced by the page.

## Open in Antigravity
1. Open this project folder in Antigravity.
2. Open `index.html`.
3. Run it using Antigravity's local web preview / a local HTTP server.

## Important implementation notes
- The page includes a YouTube embed. Use the HTTP/HTTPS preview rather than opening the HTML through `file://` if the browser blocks the embed (YouTube Error 153 can be caused by missing referrer context).
- The application form currently demonstrates front-end validation and a thank-you state. Its submit handler explicitly notes that it must be connected to the admissions CRM/API before production.
- Keep the brochure PDF in the same folder because the HTML references it by relative filename.
- External image/logo/video resources still require an internet connection.
