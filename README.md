# Iman

> Personal Software Engineering Portfolio

## Project status

The development foundation and initial portfolio structure are in place. The project is now in the **content refinement and pre-release** phase. Remaining work is editorial review, final quality review, and release preparation.

## Requirements

- Node.js 22 LTS
- npm 10 or compatible (npm 11.6.0 is recommended for the validated dependency tree)

## Local development

```bash
npm ci
npm run dev
```

## Verification

```bash
npm ci
npm run lint
npm run typecheck
npm run test
npm run build
```

The user has confirmed that the clean install and all listed checks pass on the current development branch. Re-run them after subsequent code or dependency changes.

## Dependency security note

The dependency tree includes a scoped npm override for `minimatch@11.0.1` under `@typescript-eslint/typescript-estree`. Keep the override scoped and re-check the dependency tree and `npm audit` when updating related packages.

See [dependency notes](docs/DEPENDENCY_NOTES.md) for the rationale and maintenance condition.

## Project documentation

- [Project specification](docs/PROJECT_SPEC.md)
- [Portfolio content inventory](docs/CONTENT_INVENTORY.md)
- [AI Engineering Standard](https://github.com/imandodo01/ai-engineering-standard)

## Scope discipline

Do not add backend services, authentication, a database, analytics, or third-party integrations unless a documented requirement justifies them. Keep deferred sections hidden until there is real, approved content.
