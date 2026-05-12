# Agranora — Static export

Pure HTML/CSS/JS export. No build step. No React.

## Files
- `index.html` — landing page
- `styles.css` — extra utilities
- `app.js` — light interactivity (benefits list, form feedback)
- `assets/` — images

## Run locally
Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Notes
- Tailwind is loaded via the Play CDN (`cdn.tailwindcss.com`) with the project's
  custom `sage` palette and font config inlined in `<head>`.
- For production, replace the Tailwind CDN with a built CSS file
  (`npx tailwindcss -i input.css -o styles.css --minify`).
- Icons are inlined SVGs (originally from lucide-react).
