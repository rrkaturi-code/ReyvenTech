# Reyven Tech

This project hosts the Reyven Tech moderation landing page and the guardian UI that will ship inside the downloadable desktop application.

## Running locally

```bash
npm install
npm start
```

`npm install` installs Electron as a dev dependency and `npm start` launches the Electron shell that wraps the existing `index.html` and `styles.css`.

## Packaging

Once the UI is ready, use a packaging tool such as `electron-builder` or `electron-forge` to distribute installers that include the guardian monitoring logic.
