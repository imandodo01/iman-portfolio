# Project Specification — Iman

**Status:** Active — content refinement and pre-release  
**Product type:** Static frontend website  
**Tagline:** Personal Software Engineering Portfolio

## 1. Purpose

This site represents Iman as an individual software engineer. It is independent from the Clementine Work brand, though both may share a visual language and link to each other where relevant. It must distinguish personal projects, engineering resources, professional experience, and contributions made within an employer's systems.

## 2. Product goals

- Establish a clear and recognizable public identity.
- Present work and information with accurate context.
- Provide a responsive, accessible, fast website.
- Keep the initial implementation simple and maintainable.
- Allow the site to evolve without coupling it to the other portfolio repository.

## 3. Target experience

A personal portfolio presenting Iman's software engineering experience, selected work, engineering practices, and technical explorations.

## 4. Information architecture

The current public page is a single-page portfolio with these sections:

### Home
Name, concise professional positioning, introduction, and selected work.

### Projects
Personal projects, engineering methodologies/resources, and approved professional case studies, with type, role, and contribution clearly stated. Qraft and AI Engineering Standard are currently selected public entries.

### Experience
Employment and responsibilities, described accurately and without disclosing confidential information. Do not invent missing roles, dates, responsibilities, or metrics.

### About
Personal engineering approach, interests, and professional story. Copy remains editable until explicitly finalized.

### Contact
Public professional contact channels selected for publication.

### Engineering Notes — deferred
Keep hidden from navigation and the page until at least one useful, publishable technical note exists or a clear content plan is approved. Do not render an empty placeholder section.

## 5. Visual direction

Primary identity: the name Iman, supported by the steampunk skull artwork only if it feels appropriate as a personal emblem. Do not use Clementine Work as the site's brand name. Visual direction: Personal Engineering Journal × Mechanical Blueprint. Keep the same broad palette, typography character, and ornament vocabulary as Clementine Work, but use a more personal, editorial composition with generous whitespace and a calmer visual hierarchy.

### Shared visual foundation

- Palette: Obsidian `#171817`, Charcoal `#242725`, Gunmetal `#454B49`, Antique Brass `#B08D57`, Muted Copper `#986B50`, Warm Ivory `#EAE4D8`, Aged Paper `#D8D0C1`.
- Typography candidates: Space Grotesk for headings, Inter for body text, IBM Plex Mono for technical labels, and restrained Cormorant Garamond accents.
- Shared visual language does not require shared runtime code or a shared component package.

## 6. Initial technical constraints

- React + TypeScript + Vite.
- Static frontend; no backend or database in the initial scope.
- CSS design tokens; use plain CSS or CSS Modules unless a concrete need supports another styling dependency.
- Keep content separate from presentation where practical.
- Use semantic HTML and accessible interaction patterns.
- Respect `prefers-reduced-motion`.
- Optimize images; prefer appropriate modern formats and responsive sizing.
- Avoid adding dependencies without a specific requirement.
- Deployment target: Cloudflare Pages is the current proposal, pending repository and domain setup.
- Local verification is the current quality gate: clean lockfile install, lint, typecheck, tests, and production build. GitHub Actions is not part of the current scope.

## 7. Non-goals for the initial release

- CMS or admin dashboard.
- Authentication and user accounts.
- Database or API backend.
- Complex animation, scroll choreography, or parallax before the layout is validated.
- Analytics or tracking without an explicit privacy and product decision.
- Shared package or monorepo architecture.

## 8. Content and publication rules

- Clearly distinguish personal ownership, engineering resources, professional experience, and employer contributions.
- Describe individual contributions precisely; do not claim ownership of an entire company system.
- Do not publish proprietary source code, credentials, internal URLs, customer data, screenshots, or confidential architecture.
- Use measurable experience claims only when they can be substantiated.
- Respect each project's license and third-party material terms when linking or describing it.

## 9. Quality attributes

- Responsive at mobile, tablet, and desktop breakpoints.
- Keyboard-accessible navigation and controls.
- Sufficient text and interface contrast.
- Meaningful page titles, descriptions, and social metadata.
- No broken links, placeholder claims, or unoptimized oversized assets.
- Build output must be reproducible from the committed lockfile.

## 10. Initial acceptance criteria

- [x] Project scaffold installs cleanly from the lockfile.
- [x] Development and production build commands are documented.
- [x] Responsive page shell and navigation exist.
- [x] Current public sections are implemented: Home, Projects, Experience, About, and Contact.
- [x] Qraft is presented as a personal product.
- [x] AI Engineering Standard is presented as an engineering methodology / developer resource, not an application.
- [x] Engineering Notes remain deferred until publishable content exists.
- [x] Logo/artwork is integrated without destructive modification.
- [x] Design tokens cover colors, typography, spacing, and borders.
- [x] Local lint, typecheck, tests, and production build pass (user-confirmed for the previous implementation baseline; re-run after these content changes).
- [ ] Keyboard navigation, contrast, and reduced-motion behavior receive final review.
- [x] No secrets, private data, or unapproved employer materials are intentionally included in the approved content inventory.
- [ ] Final domain, canonical URL, social preview image, and deployment configuration are completed and verified before release.

## 11. Remaining decisions and work

- Final domain and corresponding canonical URL.
- Final Open Graph/social preview image.
- Final font hosting strategy (local or provider-hosted).
- Editorial refinement and approval of About, Experience, and project copy.
- Final accessibility, responsive, and performance review.
- Final deployment configuration and release verification.

## 12. Engineering governance

Follow the current repository guidance and the user's [AI Engineering Standard](https://github.com/imandodo01/ai-engineering-standard). Before implementation, read its current `AGENTS.md` and relevant policies, then inspect this repository's instructions, structure, and Git state. Keep changes small, verify them, inspect the final diff, and report checks actually performed.
