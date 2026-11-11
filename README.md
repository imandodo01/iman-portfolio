# Iman

> Personal Software Engineering Portfolio

## Project status

Development foundation in progress. The initial scaffold uses React, TypeScript, and Vite.

## Requirements

- Node.js 22 LTS
- npm 10 or compatible (npm 11.6.0 is recommended for the validated dependency tree)

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

After generating and committing `package-lock.json`, use `npm ci` for reproducible installs.

## Dependency security note

The dependency tree includes a scoped npm override for `minimatch@11.0.1` under `@typescript-eslint/typescript-estree`. This addresses the known minimatch advisory affecting the version range requested by the current TypeScript-ESLint dependency. The override was validated in the separate Clementine Work repository with a clean install, zero-vulnerability audit, lint, typecheck, tests, and production build. Re-run those checks in this repository before considering the setup verified here.

See [dependency notes](docs/DEPENDENCY_NOTES.md) for the rationale and maintenance condition.

## Project documentation

- [Project specification](docs/PROJECT_SPEC.md)
- [Portfolio content inventory](docs/CONTENT_INVENTORY.md)
- [AI Engineering Standard](https://github.com/imandodo01/ai-engineering-standard)

## Scope discipline

Do not add backend services, authentication, a database, analytics, or third-party integrations unless a documented requirement justifies them.
