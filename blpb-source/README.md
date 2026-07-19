# Black Led Power Blueprint (BLPB)

**An interactive empowerment platform: five legally-recognized models and step-by-step playbooks for building the banks, libraries, laundromats, co-ops, land trusts, and institutions Black communities deserve.**

A production of **Jason L. Fields** — © 2026 Black Led Power Blueprint (BLPB). Powered by **The American Black Development Council (ABDC)** & **The Southern Black Endowment Committee (SBEC)** — a flagship philanthropic initiative powered by America Music Group.

---

## What's Inside

| Section | Description |
|---|---|
| **The 5 Models** | 501(c)(3) nonprofits, CDCs, 501(c)(4)s & PACs, mutual aid collectives, and chambers of commerce — with formation steps and compliance notes |
| **6 Playbooks** | Full build guides: community bank/credit union, community library, laundromat, food co-op, land trust, health hub |
| **Opportunity Index** | 9 additional main-street businesses (airport transport, entertainment venues, funeral homes, childcare, trades, and more) |
| **Black Wealth** | Six-pillar wealth framework with an interactive dollar-circulation calculator |
| **Get Involved** | 30+ national Black organizations directory (filterable) plus grassroots organizing pathway |
| **Black-Owned Spotlight** | Features the founder's label, [Lucvi & Co.](https://lucvi.clothing), and the Black College Collection |

## Tech Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** (custom Pan-African theme)
- **Framer Motion** (scroll reveals, animated counters)
- **Lucide React** (icons)
- **React Router** (client-side routing)

## Local Development

```bash
npm install       # install dependencies
npm run dev       # start dev server
npm run build     # build for production → dist/
```

## Deployment

Static SPA — deploy the `dist/` folder anywhere:

- **Vercel**: auto-detects, zero config
- **Netlify**: build command `npm run build`, publish directory `dist/`
- **GitHub Pages**: any static host works

SPA routing fallback (rewrites to `/index.html`) is configured in `vercel.json`. For Netlify, add `public/_redirects` with `/* /index.html 200`.
