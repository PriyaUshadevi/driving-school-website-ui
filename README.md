# Shanaz Driving School Website

A fast, responsive, recruiter-ready and client-ready website for Shanaz Driving School in Halifax, United Kingdom. The site presents services, reviews, contact information, booking enquiry flow, and directions in a clear single-page experience.

## Project Status

Status: Completed, tested, and passing.

Final verification completed on 2026-05-07:

- `npm.cmd run check` - passed with 0 errors, 0 warnings, 0 hints
- `npm.cmd run build` - passed and generated the production `dist/` output
- `npm.cmd audit --audit-level=moderate` - passed with 0 vulnerabilities

## Problem Statement

Local driving schools need a trustworthy digital presence that helps learners quickly understand the services offered, see social proof, and make contact without friction. The original project had blocked npm scripts, missing checker dependencies, outdated/vulnerable packages, TypeScript diagnostics, and incomplete README documentation, which made it difficult to run, verify, or confidently showcase.

## Solution

This project provides a polished Astro-based marketing website for Shanaz Driving School. It includes:

- A professional hero section with clear calls to book or call.
- Service cards for learner lessons, refresher lessons, and test preparation.
- Review cards and rating messaging to reinforce trust.
- Contact and booking enquiry form integration.
- Business contact details, opening hours, address, and embedded map.
- Static-site output suitable for fast hosting on modern platforms.
- Clean project scripts for development, checking, building, and previewing.
- Updated dependency graph with a passing security audit.

## Technology Stack

- Astro 6 for static site generation
- React 19 for reusable interactive UI components
- Tailwind CSS 4 for styling
- Radix UI and shadcn-style components
- Lucide icons
- TypeScript
- npm

## Prerequisites

Install these before running the project:

- Node.js `>=22.12.0`
- npm `>=9.6.5`
- Git

Current verified local runtime:

- Node.js `v24.15.0`

## Project Structure

```text
driving-school-website-ui/
  README.md
  shanaz-driving-school/
    package.json
    package-lock.json
    astro.config.mjs
    tsconfig.json
    src/
      pages/
      components/
      styles/
      lib/
    public/
```

The runnable Astro application is inside `shanaz-driving-school/`.

## Installation

From the repository root:

```bash
cd shanaz-driving-school
npm install
```

On Windows PowerShell, if `npm` is blocked by execution policy, use:

```bash
npm.cmd install
```

## Configuration

Main configuration files:

- `shanaz-driving-school/astro.config.mjs` - Astro, React, Tailwind, sitemap, and B12 source-info integration.
- `shanaz-driving-school/src/b12Context.json` - B12/product context including site URL, client UID, reCAPTCHA version, and preview settings.
- `shanaz-driving-school/src/styles/global.css` - Tailwind imports, theme tokens, colors, and base styles.

Contact/business details are currently embedded in the page/components:

- Phone: `07815 671 794`
- Address: `2 Aked's Rd, Halifax HX1 2TR, United Kingdom`
- Main page: `shanaz-driving-school/src/pages/index.astro`
- Contact form: `shanaz-driving-school/src/components/ContactForm.astro`

If deploying under a new public domain, update `website_url` in `src/b12Context.json` so canonical URLs and sitemap generation are correct.

## Available Scripts

Run scripts from `shanaz-driving-school/`.

```bash
npm run dev
```

Starts the local Astro development server.

```bash
npm run check
```

Runs Astro diagnostics and TypeScript checks.

```bash
npm run build
```

Builds the production static site into `dist/`.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run build-dev
```

Builds with `BUILD_DEV=true` for B12 source-info integration behavior.

## How To Run Locally

```bash
cd shanaz-driving-school
npm install
npm run dev
```

Open the local URL printed by Astro, usually:

```text
http://localhost:4321
```

## How To Verify Before Delivery

```bash
npm run check
npm run build
npm audit --audit-level=moderate
```

Expected result:

- Astro check: 0 errors, 0 warnings, 0 hints
- Astro build: completes successfully
- npm audit: 0 vulnerabilities

## Deployment

This is a static Astro site. After running:

```bash
npm run build
```

Deploy the generated `shanaz-driving-school/dist/` directory to a static hosting provider such as Netlify, Vercel, Cloudflare Pages, GitHub Pages, or a standard web server.

## Work Completed

- Replaced blocked placeholder npm scripts with real Astro scripts.
- Added `check` script and official Astro checker dependencies.
- Added `.gitignore` for dependencies, build output, local Astro metadata, and environment files.
- Upgraded Astro and related packages to patched compatible versions.
- Added npm override for the vulnerable YAML language server transitive dependency.
- Fixed Astro/TypeScript diagnostics in config, B12 scripts, reCAPTCHA handling, SVG loops, type-only imports, and form helpers.
- Cleaned public text characters and aligned Lucide usage with Astro.
- Added production-ready README documentation.

## Final Condition

The project is in good working condition and can be marked as closed and passed based on the completed checks, successful production build, and clean security audit.
