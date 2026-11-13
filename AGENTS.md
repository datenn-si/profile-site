# Instruction for Agents

When a repository's documentation and its existing code disagree, follow the conventions used in the existing code, and in your final reply point out each inconsistency you found between the documentation and the code.

## Project overview

This repository is the profile site for Datenshi (@datenn-si), built with Astro, Tailwind CSS, and Cloudflare Workers. Pages are authored directly under `src/pages/`. Japanese is the default locale at `/`. English pages live under `src/pages/en/` and are served from `/en/`.

Key architecture points:

- `astro.config.mjs` configures the Astro site, i18n routing, Cloudflare adapter, sitemap, Noto Sans JP, and Tailwind via Vite. Site URL and locale tags come from `src/constants.ts`.
- `src/constants.ts` holds site metadata, social links, the tech stack, and project entries. Project descriptions are keyed by locale.
- `src/i18n.ts` holds UI copy and the locale URL helpers. Read the active locale from `Astro.currentLocale`.
- `src/pages/` contains the Japanese routes: home, email, privacy, and 404. `src/pages/en/` is the English route for the same pages. Home, email, and 404 share one component each. Privacy stays as translated Markdown.
- `src/layouts/Layout.astro` is the shared wrapper for document metadata, SEO tags, fonts, header, footer, share button, and language switcher.
- `src/layouts/LegalPage.astro` renders legal Markdown such as the privacy policy.
- `src/components/` holds reusable UI: `ContentBox`, `Header`, `Footer`, `LanguageSwitcher`, `ShareButton`, and the shared page views `HomePage`, `EmailPage`, and `NotFound`.

## Development

When starting the dev server, use background mode:

```bash
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

This project uses pnpm and Node 22.12+ (`package.json`). CI installs Node 26.

- Install dependencies: `pnpm install --frozen-lockfile`
- Start the dev server: `pnpm dev` or `astro dev --background`
- Build production output: `pnpm build`
- Preview the built site: `pnpm preview`
- Lint: `pnpm lint`
- Fix lint issues: `pnpm lint:fix`
- Format: `pnpm fmt`
- Check formatting without fixing: `pnpm fmt:check`
- Generate Cloudflare Worker types: `pnpm generate-types`
- Deploy to Cloudflare Workers: `pnpm deploy`

This repository has no test runner. CI (`.github/workflows/ci.yml`) runs on pull requests to `main`:

- `pnpm lint`
- `pnpm fmt:check`
- `pnpm build`

Deploy (`.github/workflows/deploy.yml`) runs on pushes to `main`. It writes `EMAIL_ADDRESS` into `.env`, runs `pnpm build`, deletes that file, then runs `pnpm deploy`.

For a focused validation pass, prefer:

- `pnpm lint` for component, script, or style changes
- `pnpm build` for page, route, or layout changes
- `pnpm fmt:check` when editing formatting-sensitive files

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Routing and content conventions

- Japanese is the default locale and is not prefixed. English lives under `/en/`. `astro.config.mjs` sets `prefixDefaultLocale: false`. Add an English route at `src/pages/en/` with the same relative path, and render the shared component. Do not detect the locale by parsing `pathname`.
- Build internal links with `localeUrl()` from `src/i18n.ts`. `hreflang` alternates use `localeAbsoluteUrl()`. `x-default` is the default locale.
- UI strings live in `copy` in `src/i18n.ts`. Translated prose that is a whole document, such as the privacy policy, stays in that locale's Markdown file.
- The email pages set `noIndex` and are excluded from the sitemap. The address comes from the `EMAIL_ADDRESS` server secret (`astro:env/server`). See `.env.example`.
- `src/pages/404.astro` and `src/pages/en/404.astro` are Astro's localized error routes. Keep both files.
- Legal pages are Markdown. They set `layout` to `LegalPage.astro` and require `title` and `description` in frontmatter.
- Prefer the `@/*` import alias defined in `tsconfig.json` for internal imports.
- When changing pages or shared layout code, keep SEO metadata consistent with `Layout.astro` and `src/constants.ts`.
- Shared profile data (links, tech stack, projects, site name, default description) belongs in `src/constants.ts`. A link on this site's own origin is rewritten into the active locale by `localizeSiteHref()`.

## Repository-specific conventions

- The site is Japanese-first, with an English mirror under `/en/`. When you add or change user-facing copy, update both locales.
- Project docs are bilingual: `README.md` (English) and `README.ja.md` (Japanese).
- The README says to run lint, format, and build before committing. Pull request CI runs those checks. Husky and lint-staged are not used.
- `public/` is for static assets such as favicon, manifest, OG image, and site files.
- `resource/` is reserved for excluded or separately licensed content and should not be treated like normal source code. The icon, background, OG image, and personal profile content are outside AGPL-3.0-only. See the license section of `README.md`.
- Use the existing Astro and Tailwind stack. Add another UI framework or build system only when a task explicitly requires it.

## Useful references

- `README.md` — repo overview and project rules
- `README.ja.md` — Japanese overview
- `AGENTS.md` — repo-specific guidance for agents
- `.github/workflows/ci.yml` — pull request checks
- `.github/workflows/deploy.yml` — production build and deploy
