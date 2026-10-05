# Michael Bower — Human Agency Infrastructure

The initial foundation for Michael Bower's personal research, engineering and writing portfolio. It is intentionally static-friendly and keeps research claims and evidence boundaries explicit.

## Stack

Next.js 14, TypeScript, Tailwind CSS and the App Router. There is no database, CMS, authentication, analytics, newsletter service or backend.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Production checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Structure

- `app/` — routes, layout and global styles
- `components/` — small reusable UI pieces
- `src/data/work.ts` — project/work entries
- `src/data/research.ts` — research hierarchy and maturity labels
- `src/data/writing.ts` — structured writing entries and body content

To add a research item, edit `src/data/research.ts`. To add a project, add a `WorkItem` to `src/data/work.ts`; the projects index and dynamic project page use that data. To add a writing post, add a `Post` to `src/data/writing.ts`, including its metadata and body blocks.

Global metadata lives in `app/layout.tsx`. This first version uses in-code structured content rather than a CMS or filesystem parser so it remains easy to understand and extend.

## ICTF research

`/research/ictf` contains the dedicated ICTF page. Its portfolio card appears on the home page and research index; `src/data/ictf.ts` holds artifact links and the sourced research timeline. The page uses the existing design primitives and route metadata/Open Graph conventions. Canonical URLs and the sitemap use `siteConfig.baseUrl` once a production domain is configured.

The original PDFs are copied without modification to `public/research/ictf/`:

- `ictf-overview.pdf` — 1-page summary; SHA-256 `935403f8200b2a61812ff5039dc8f5eca62e8b89748c27e6499895f56b18a77c`
- `ictf-v1.2.1-preprint.pdf` — frozen 25-page pre-experiment paper; SHA-256 `54c6f4795f683d45c629d01e71de3c0e658aba976f51f4cb81f87e961584feed`

Keep the preprint frozen. New empirical findings belong in separately labeled records. Timeline timestamps come from the experiment branch's commits and are displayed in America/Los_Angeles time. The first benchmark is synthetic and did not evaluate AGS. H4 was not supported; the later hazard profiles are exploratory. The SVG profiles are conceptual sketches, not quantitative plots.

## Intentional boundaries

The sample writing entry is clearly marked as draft content. Research pages distinguish implementation status, confirmatory results, exploratory findings, and future work. They do not claim production validation or a solution to AI alignment.
