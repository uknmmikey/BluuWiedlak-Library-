# E-Sign Store — App Catalog

A small static app-store-style catalog for an E-Sign project.

## Features
- Responsive app cards
- Search
- Version/category metadata
- External "View app" links
- GitHub Pages compatible

## Add an app

Edit `apps.js`:

```js
{
  name: "My App",
  version: "1.2.3",
  category: "Utilities",
  icon: "🛠️",
  description: "Short description.",
  url: "https://your-authorized-download-or-app-page.example"
}
```

The URL should point to a page or distribution endpoint you control or are authorized to publish.

## Run locally

Open `index.html` in a browser, or use any static web server.

## GitHub Pages

Push the files to a GitHub repository, then enable GitHub Pages from the repository's Settings → Pages. Select your deployment source and publish.

## Important

This template is a catalog UI. It does not implement iOS code signing, certificate handling, Apple licensing, or installation bypasses. For an actual iOS alternative app marketplace, follow Apple's current MarketplaceKit, App Store Connect, notarization, licensing, and regional eligibility requirements.
