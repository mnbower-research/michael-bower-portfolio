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

## Intentional boundaries

The sample writing entry is clearly marked as draft content. No experimental results, external URLs, affiliations, credentials, production validation, or unsupported novelty claims have been added.
