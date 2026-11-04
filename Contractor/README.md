# Ridgeway Exteriors — contractor template

Sellable website demo for an **exterior contractor**, built for KTS General Solution LLC. The layout follows a light contractor pattern: phone bar, circular badge, full-bleed hero with a rotating service word, review cards, a sky-blue service band, a project mosaic, and a black footer.

The default trade is pressure washing. The same pages sell to roofers, remodelers, painters, flooring companies, and landscapers by changing words, colors, and photos.

## Pages

- Home
- Services, plus a page for each service
- Gallery
- Before & After (drag to compare)
- Reviews
- Contact

## Rebrand a client

Edit `src/content.js` only for a first pass:

1. `SHOP` — name, logo lines, phones, email, address, hours, cities
2. `THEME` — `navy`, `accent` (the orange word), `sky` (the blue bands)
3. `HERO.headline` — the big trade word, such as Power Washing, Roofing, or Painting
4. `HERO.slides` — the words that rotate, and their photos
5. `SERVICES`, `PROJECTS`, `GALLERY`, `COMPARISONS`, `REVIEWS`

`SERVICES` also fills the menu, the footer, and the contact form. The page title and description update from `SHOP` when the site loads.

Before-and-after photos should be two shots of the same job. Drop the client’s pair into `COMPARISONS`.

The Apex Auto shop template is the sibling folder `Auto Repair`.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints.

The estimate form is front-end only. It confirms on the page and does not send email until a live form service is connected.
