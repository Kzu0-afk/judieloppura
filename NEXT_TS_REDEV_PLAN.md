# Next.js + TypeScript Redevelopment Plan

Strategic plan to rebuild the portfolio in Next.js with full TypeScript, aligning with the existing design language (modern, professional, dark theme with blue accents) while tightening security and performance.

## 1) Objectives and Success Criteria
- Elevate maintainability with strict TypeScript, shared types, and linted contracts.
- Preserve current content structure (Hero, About, Tech Stack, Professional Work, Projects, Contact) and UX polish (animations, responsiveness, SEO).
- Ship secure-by-default pages and APIs (rate limiting, header hardening, minimal request logging).
- Achieve fast loads (core web vitals in green), optimized images/fonts, and stable deployments on Vercel.

## 2) Target Stack and Tooling
- Next.js (App Router) + TypeScript + React Server Components where applicable.
- Styling: Tailwind CSS (keep dark/blue theme), CSS modules for one-off needs.
- Animations: Framer Motion (or Motion One) with reduced-motion support.
- Content data: typed config objects; optional MDX for long-form copy (no mock data).
- Forms: Next API routes with schema validation via Zod and server actions where helpful.
- Lint/format: eslint + next/core-web-vitals rules; prettier (if desired) with import sorting.
- Testing: Playwright (E2E for key flows), Vitest/RTL for UI units, ESLint/Type checks in CI.

## 3) High-Level Architecture
- `src/app`
  - `layout.tsx` for shared shell, metadata, font loading, analytics.
  - `page.tsx` as homepage composed of sections.
  - `(sections)/` folder grouping server components per section: `hero`, `about`, `tech-stack`, `work`, `projects`, `contact`.
  - `api/contact/route.ts` for form submissions with validation and anti-abuse.
- `src/components` for reusable presentational pieces (buttons, cards, badges, timelines, metrics, section headers).
- `src/content` for typed data sources (projects, roles, tech categories) exported as const arrays with TypeScript types.
- `src/lib`
  - `types.ts` for shared interfaces.
  - `seo.ts` for metadata builders and OpenGraph defaults.
  - `analytics.ts` for pageview/event hooks if enabled.
  - `security.ts` for security headers and rate limiting helpers.
- `public/` for optimized assets (SVGs, favicons, social previews).

## 4) Type System Plan
- Enable `strict` in `tsconfig` and `noImplicitAny`.
- Define shared types:
  - `HeroContent`, `Statistic`, `TechCategory`, `WorkContribution`, `Project`, `ContactLink`.
  - Utility types for CTA buttons and icon maps.
- Export content as `as const satisfies` typed arrays to catch omissions at build time.
- Prefer server components for data-only sections; client components only when interactivity is required (nav, animated counters, theme toggles).

## 5) Routing and Pages
- Home: single-page layout at `/` built from section components.
- API: `POST /api/contact` with Zod validation, spam/abuse mitigation (rate limit, honeypot, server-side email sending).
- Metadata: use Next `metadata` export for title/description/OpenGraph/Twitter cards; include canonical and structured data where relevant.

## 6) Styling and UX
- Keep dark base with blue accent; define theme tokens in `globals.css` and Tailwind config.
- Responsive grid for sections; ensure readable line length and consistent spacing scale.
- Animations: entrance and scroll effects with `prefers-reduced-motion` guards; avoid layout shift.
- Components to build/reuse: `SectionShell`, `CTAButton`, `Badge`, `TechPill`, `Card`, `Timeline`, `MetricGrid`, `ContactForm`.

## 7) Content Migration (no placeholders)
- Map existing Vite components to Next sections:
  - `Hero` → `(sections)/hero` server component with CTA buttons.
  - `About` → `(sections)/about` with stats grid.
  - `TechStack` → `(sections)/tech-stack` with typed categories.
  - `Professional Work / Contributions` → `(sections)/work` timeline/cards.
  - `Projects` → `(sections)/projects` cards with links.
  - `Contact` → `(sections)/contact` form + direct links.
- Move real content into `src/content/*.ts` files; keep environment-specific secrets out of repo.

## 8) Performance and SEO
- Use `next/image` for responsive images; pre-size to avoid CLS.
- Preload primary font; consider font subsets.
- Add `robots.txt` and `sitemap.xml` via `app` routes.
- Leverage ISR or static rendering for content sections; no client fetching unless necessary.
- Set canonical URLs and OpenGraph images; add JSON-LD for person/portfolio.

## 9) Security and Anti-Abuse
- Apply security headers via `next.config` and middleware: `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
- API hardening:
  - Rate limiting (e.g., `@upstash/ratelimit` or in-memory token bucket) on `/api/contact`.
  - Input validation with Zod; reject unexpected fields; strip/escape user input before storage/forwarding.
  - Honeypot field and optional CAPTCHA toggle; throttle repeated submissions.
  - Minimal request logging; redact PII and secrets; structured logs only when needed.
- Infrastructure: enforce HTTPS, disable directory indexing, and avoid exposing build metadata.

## 10) Build, Deploy, and Observability
- Environment variables: `NEXT_PUBLIC_*` for safe public values; secrets for email/transport stored only in Vercel env.
- Vercel deployment with `NODE_VERSION` pinned; enable Analytics if desired.
- Add lightweight monitoring: Vercel logs, optional Sentry/Logflare (with DSN via env).
- CI steps: `npm run lint`, `npm run type-check`, `npm run test`, `npm run build`.

## 11) Testing Strategy
- Unit: render sections with real content data; verify types prevent missing fields.
- Integration: API route schema and rate-limit behavior.
- E2E: load homepage, navigate sections, submit contact form happy path and abuse cases.
- Accessibility: automated axe checks; keyboard navigation; color-contrast verification.

## 12) Execution Phases
- Phase 1: Project scaffolding (ensure strict TS, base layout, theme tokens, linting).
- Phase 2: Content migration into `src/content` with shared types; build section components.
- Phase 3: Contact flow (form UI, Zod validation, API route, rate limiting, email sending).
- Phase 4: SEO/perf/security hardening (metadata, headers, images, sitemap/robots, reduced-motion).
- Phase 5: Testing + CI + deploy to Vercel; regression pass on responsive breakpoints.

