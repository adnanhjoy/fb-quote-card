# Quote Postcard Generator

A simple Bengali quote card generator built with HTML, CSS, and TypeScript.

You can type a quote, preview it live on the card, and download the exact same card as a PNG image.

## Features

- Live quote preview
- Stylish Bengali fonts for quote and author name
- Download card as image
- Preview and downloaded output stay visually matched
- TypeScript source with browser-ready JavaScript output

## Project Files

- `index.html` - page structure
- `styles.css` - card and page styling
- `script.ts` - main TypeScript source
- `script.js` - browser runtime file
- `tsconfig.json` - TypeScript config

## How It Works

The app updates the quote preview as you type inside the textarea.

When you click the download button, it captures the visible card using `html2canvas` and downloads it as `quote-postcard.png`.

Because the app captures the real rendered card, the downloaded image matches the preview much more closely.

## Run Locally

You can open `index.html` directly in a browser.

If you want a better local development experience, use a simple local server such as VS Code Live Server.

## TypeScript Build

The browser does not run `.ts` files directly, so `script.ts` must be compiled to `script.js`.

Run:

```bash
tsc
```

This will update `script.js` in the project root.

## Deploy

This project can be deployed as a static site on Vercel.

Make sure these files are included in deployment:

- `index.html`
- `styles.css`
- `script.js`

If you change `script.ts`, run `tsc` before deploying so the latest `script.js` is generated.

## Notes

- The project uses Google Fonts and `html2canvas` from CDN.
- Internet access is required for those external resources to load properly.
