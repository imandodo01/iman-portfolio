# Dependency Notes

## Scoped minimatch override

**Current override**

```json
{
  "overrides": {
    "@typescript-eslint/typescript-estree": {
      "minimatch": "11.0.1"
    }
  }
}
```

The current TypeScript-ESLint dependency requests a minimatch 10.x range. The affected release range reported a denial-of-service advisory. The safe patched release available during foundation setup was minimatch 11.0.1, whose Node engine requirement supports Node 22.

The override is deliberately scoped to `@typescript-eslint/typescript-estree`; it does not replace unrelated minimatch versions elsewhere in the dependency tree.

## Validation and maintenance

This exact override was exercised in Clementine Work using Node 22.13.0 and npm 11.6.0. The clean install, npm audit, lint, typecheck, Vitest suite, and production build all passed there. Iman Portfolio must independently run the same checks after its own lockfile is generated.

Keep the override until the upstream TypeScript-ESLint dependency officially requests a patched compatible minimatch range. When that happens:
1. Review the upstream dependency range and advisory status.
2. Remove the override only if the resolved tree is no longer affected.
3. Regenerate `package-lock.json` with the project's supported Node/npm versions.
4. Run `npm ci`, `npm audit`, lint, typecheck, tests, and build.
5. Update this note with the decision and validation evidence.
