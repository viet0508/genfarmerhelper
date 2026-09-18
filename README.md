# GenFarmer Support Center

Customer onboarding documentation for **GenFarmer BoxPhone**, in **4 languages**
(English · Tiếng Việt · Español · 日本語), built with [Astro Starlight](https://starlight.astro.build).

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> ./dist  (static site, deploy anywhere)
```

## Deploy (free)

Push to Git and connect to **Cloudflare Pages** (or GitHub Pages / Vercel / Netlify):
framework **Astro**, build `npm run build`, output `dist`. No server needed. You get a
free `*.pages.dev` URL; point `docs.genfarmer.com` at it with one CNAME.

## Where things are

| Thing | Location |
| --- | --- |
| Content (4 languages) | `src/content/docs/<lang>/` |
| Navigation, languages, title, logo | `astro.config.mjs` |
| Brand theme (colors, font) | `src/styles/custom.css` |
| Images | `public/images/` · logo `src/assets/` |

**`CLAUDE.md`** has the full finish-and-deploy guide. **`IMAGES.md`** lists the 16
images the design needs and their status. Content was converted from the team's GitBook.
