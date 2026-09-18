# GenFarmer Support Docs — build & finish guide (for Claude Code)

This is a **customer onboarding documentation site** for GenFarmer BoxPhone, built on
**Astro Starlight**, in **4 languages** (English, Tiếng Việt, Español, 日本語).
The content was converted from the team's existing GitBook. Your job is to run it,
polish the design toward the provided mockup, drop in the real images, and deploy.

> **Important:** this project was scaffolded in a sandbox where `npm install` was
> blocked, so it has **not been built yet**. The very first thing to do is install
> and run it, then fix anything the build reports.

## 1. Run it

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build -> ./dist
```

Node 18+ required. If `sharp` gives trouble on your platform, it is only used for
image optimization — you can remove it from `package.json` and Astro falls back.

## 2. How it is organized

- Content: `src/content/docs/<lang>/…` — one folder per language (`en`, `vi`, `es`, `ja`).
  Slugs are identical across languages, which is what makes the language switcher work.
- Pages per language: `index.md` (home), `a1-bon-lop-he-thong.md`,
  `a2-lo-trinh-mot-tuan/` (index + `a3`…`a7`), `tra-cuu-theo-trieu-chung.md`
  (troubleshoot), `thuat-ngu.md` (glossary), `lien-he-ho-tro.md` (support).
- Navigation, languages, brand title/logo, and the sidebar are all in
  `astro.config.mjs`. The sidebar uses `{ slug: … }` entries so it auto-localizes;
  group labels are translated inline via `translations`.
- Brand theme (colors `#1138EE` / `#557DFF`, Inter font, home buttons, figures):
  `src/styles/custom.css`.
- Images: `public/images/…` (referenced from content as `/images/<file>`).
  Logo: `src/assets/genfarmer-logo.png`.

## 3. What still needs doing (priority order)

1. **Get it building** — `npm install && npm run build`. Fix any frontmatter/link
   errors it reports (should be clean; content was validated for links + titles).

2. **Real images (16).** See `IMAGES.md` for the full manifest: which image goes on
   which page, what we already have, and what the media team still needs to supply.
   Drop files into `public/images/` using the names in that file. The 4 "layer"
   illustrations and the software screenshots we already have are in `public/images/`.

3. **Mermaid diagrams.** The A1/A2/A5 pages contain ```mermaid code blocks. Starlight
   renders them as plain code until you add a Mermaid integration. Easiest option:
   ```bash
   npm install astro-mermaid mermaid
   ```
   then add `mermaid()` to `integrations` in `astro.config.mjs` (before `starlight`),
   per the astro-mermaid README. (Or replace the diagrams with static SVGs.)

4. **Match the mockup design.** The team's target design is the HTML mockup
   `genfarmer-support-center.html` (ask Việt for it — it is the v3 mockup with the
   full-bleed hero, pill sidebar, layer diagrams). Starlight can't take that HTML
   directly, but you can approximate it in `src/styles/custom.css` and with a custom
   home page. Specifically:
   - Give the **home page** (`index.md`) a Starlight `hero` (splash template) using
     the cover image `03-bia-trang-chu.jpg` — set `template: splash` + `hero:` in its
     frontmatter.
   - The home "What to read" blocks are currently `#### [Title](link)` sections.
     Optionally upgrade them to Starlight `<CardGrid>` / `<LinkCard>` (rename the file
     to `.mdx` and import the components).

5. **Deploy — Cloudflare Pages (free).**
   - Push this folder to a Git repo (GitHub/GitLab).
   - Cloudflare Pages → Create project → connect the repo.
   - Framework preset: **Astro**. Build command: `npm run build`. Output dir: `dist`.
   - First deploy gives a free `*.pages.dev` URL. To use `docs.genfarmer.com`:
     Pages → Custom domains → add `docs.genfarmer.com`; it auto-creates the CNAME in
     Cloudflare DNS (or add a CNAME `docs → <project>.pages.dev` at your DNS host).
   - Set `site:` in `astro.config.mjs` to the final URL before the production build
     (used for sitemap/canonical URLs).

## 4. Content freshness

The text was converted from a GitBook export dated ~2026-09-11. If the GitBook has
been edited since, re-export it (GitBook → space → export / or the git-sync content)
and re-run the conversion, **or** just edit the Markdown here directly from now on —
this repo is the source of truth going forward.

## 5. Conversions already applied (so you know what changed vs GitBook)

- `{% hint style=… %}` → Starlight asides (`:::note/:::tip/:::caution/:::danger`).
- `{% stepper %}/{% step %}` → flattened to `###` step headings.
- `{% tabs %}/{% tab %}` → bold `**Tab label**` sub-sections (USB/OTG on A4).
- `<table data-view="cards">` → `#### [Title](link)` blocks (+ image for the layer cards).
- All internal `*.md` links rewritten to `/‹lang›/‹slug›` routes.
- GitBook asset paths rewritten to `/images/…`.
- Page `# H1` moved into frontmatter `title:` (Starlight renders the title).
