# Collins Vincent — Portfolio

Personal portfolio for Collins Vincent, senior full-stack engineer. Built with Next.js 16 (App Router) and TypeScript, statically rendered.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

Content (products, experience, skills) lives in `app/data.ts`.

## SEO

- Full metadata: title template, description, keywords, canonical, Open Graph (profile), Twitter card
- JSON-LD graph: `WebSite`, `ProfilePage`, `Person` (with `sameAs`, `knowsAbout`, `alumniOf`) and `SoftwareApplication` for each product
- Generated `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, `/opengraph-image`, `/twitter-image`, `/icon`, `/apple-icon`

### Environment variables (Vercel → Settings → Environment Variables)

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL, e.g. `https://collinsvincent.dev`. Falls back to the Vercel production URL. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console verification token |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Bing Webmaster Tools verification token |

## Deploy

Import this repo at https://vercel.com/new — framework is detected automatically, no config needed.
