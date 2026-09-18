# Image manifest (16 images from the mockup)

Drop finished images into `public/images/` using the **file name** in the first column,
then reference them from the page shown. Status legend:

- ✅ **included** — a usable file is already in `public/images/`
- 🟡 **stand-in** — a placeholder/rough version is in the repo; replace with the real one
- ❌ **needed** — media/photo team must supply (real product photo or brand/design asset)

| File name (put in `public/images/`) | Page / where it goes | Status | Notes |
| --- | --- | --- | --- |
| `01-logo-genfarmer.png` | Header logo | ✅ | Already at `src/assets/genfarmer-logo.png` (used by the site header) |
| `02-mark-soi-genfarmer.png` | Home — brand watermark/mark | ❌ | Brand asset (the GenFarmer "wolf" mark) — from media |
| `03-bia-trang-chu.jpg` | Home — hero/cover | ❌ | Design cover for the splash hero (see CLAUDE.md §4) |
| `04-anh-bia-video.jpg` | Home — video tutorial thumbnail | ❌ | Thumbnail for the YouTube tutorial |
| `05-a1-lop1-boxphone.jpg` | A1 · Layer 1 (Boxphone) | 🟡 | Stand-in: `layer1-boxphone.jpg`. Real Boxphone product photo preferred |
| `06-a1-lop2-genrouter-h3000.jpg` | A1 · Layer 2 (Router) | 🟡 | Stand-in: `layer2-genrouter.jpg`. Real GenRouter H3000 photo preferred |
| `07-a1-lop3-router-va-minipc.jpg` | A1 · Layer 3 (Account + Proxy / hardware) | 🟡 | Stand-in: `layer3-account-proxy.jpg`. Real router + mini-PC photo |
| `08-a1-lop4-automation.jpg` | A1 · Layer 4 (Automation) | 🟡 | Stand-in: `layer4-automation.jpg` |
| `09-a3-tu-boxphone.jpg` | A3 · Day 0 (box placement) | ❌ | Real photo of the Boxphone cabinet in place |
| `10-a3-mini-pc.jpg` | A3 · Day 0 (mini PC) | ❌ | Real mini-PC photo |
| `11-a4-dan-boxphone.jpg` | A4 · Day 1 (the 20-phone array) | ❌ | Real photo of the phone array |
| `12-a4-control-center.jpg` | A4 · Day 1 (Control Center) | ✅ | Software screenshot, in `public/images/` |
| `13-a6-hop-genfarmer-trust.jpg` | A6 · Day 3 (GenFarmer Trust) | ❌ | Product/screen shot of GenFarmer Trust |
| `14-a7-logo-nen-tang.jpg` | A7 · Day 4–5 (platform logos) | ❌ | TikTok / Facebook / Instagram / X / Spotify logos strip |
| `15-tra-cuu-giao-dien-phan-mem.jpg` | Troubleshoot — software UI reference | ✅ | Software screenshot, in `public/images/` |
| `16-thuat-ngu-dien-thoai.jpg` | Glossary — phone terminology | ❌ | Simple labelled diagram |

## Extra software screenshots already in the repo (use where they fit the steps)

These crisp screenshots are in `public/images/` and can illustrate the A4/A5/A6 steps:

- `sc-genrouter.jpg` — GenRouter proxy/VPN panel (A5 · assign proxy step)
- `sc-account-manager.jpg` — Account Manager sheet (A5 · account sheet step)
- `sc-store.jpg` — Mini-App Store (A6 · download automation package)
- `sc-automation-tools.jpg` — Setup Automation (A6 · configure automation)
- `sc-schedules.jpg` — Schedules screen (A6 · check next morning / scheduling)

To place one, add a figure in the relevant `.md`:

```md
![Control Center](/images/12-a4-control-center.jpg)
```

or with a caption:

```md
<figure><img src="/images/sc-genrouter.jpg" alt="GenRouter panel"><figcaption>Assign a proxy to each phone at 192.168.5.1:9000</figcaption></figure>
```

Remember to add the image to **all four language files** if you want it in every language.
