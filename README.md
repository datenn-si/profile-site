# profile-site

[![CI/CD](https://github.com/datenn-si/profile-site/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/datenn-si/profile-site/actions/workflows/ci-cd.yml)

[ English | [日本語](README.ja.md) ]

This is the profile site for "Datenshi" (@datenn-si).

> [!NOTE]
> The website content is written in Japanese only.

## Frameworks and Technologies Used (Excerpt)

- Astro.js
- Tailwind CSS
- Iconify
- Cloudflare Adapter
- Cloudflare Workers
- Oxfmt
- Oxlint
- GitHub Actions

## File Structure

```text
├── .github/
│   └── workflows/
│       └── ci-deploy.yml        # CI, build, and deployment
├── public/                      # Public files such as favicon, OG images, and manifest
├── src/
│   ├── assets/                  # Assets such as images
│   ├── components/              # Reusable UI components
│   │   ├── ContentBox.astro
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── layouts/
│   │   └── Layout.astro         # Shared layout
│   ├── pages/                   # Page definitions
│   ├── styles/                  # Global styles
│   ├── constants.ts             # Site settings and shared data
│   └── env.d.ts                 # Cloudflare runtime type definitions
├── .env.example                 # Example local environment variables
├── astro.config.mjs             # Astro, Cloudflare, and Tailwind configuration
├── package.json                 # Dependencies and npm scripts
├── pnpm-lock.yaml               # Dependency lockfile
├── pnpm-workspace.yaml          # pnpm workspace configuration
├── tsconfig.json                # TypeScript configuration
├── worker-configuration.d.ts    # Cloudflare Worker type definitions
└── wrangler.jsonc               # Cloudflare Workers configuration
```

## Development Rules

- Run lint, format, and build before committing.
  - Husky and lint-staged are not currently used.
- CI also runs the same checks.

## License

The source code in this repository is provided under the GNU Affero General Public License v3.0 only (AGPL-3.0-only). For details, see the `LICENSE` file in the repository root.

However, the following content is not included within the scope of AGPL-3.0-only, and all rights are separately reserved:

- The "datenn-si" icon, background images, OG images, and other image or non-code visual assets
- All files in the `resource/` directory
- Biographical text, profile information, SNS links, and other personal content related to "datenn-si"

No permission to use these contents is granted under AGPL-3.0-only. If you wish to use, copy, modify, redistribute, or otherwise handle these contents, you must obtain separate permission from the respective rights holders.

If you fork and use this repository, do not reuse the excluded content listed above as-is. Please replace it with your own icon, background images, profile information, SNS links, and similar content.

This section is intended to clarify the rights relating to the excluded content. It does not alter the rights or conditions set forth by AGPL-3.0-only for the source code to which that license applies.
