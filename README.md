# TypeScript/PNPM/Vite Project Template

Setup template that includes GitHub workflow and action templates, as well as some configurations for the typical tools I use on web projects, including:
  - TypeScript
  - PNPM (via .nvmrc)
  - Vite
  - Vitest
  - Eslint
  - Prettier
  - Commitlint
  - GitHub Actions
  - Docker
  - GitHub
  - Tailwind
  - PostCSS
  - Husky
  - Lint-Staged
  - Changesets

## Workflow Templates

- Superlinter
- [Dependabot](./workflow-templates/dependabot.yml)

### Reusable Workflows

- [TypeScript CI (using PNPM package manager)](./reusable-workflows/typescript-ci.yml)
- [Basic Checks](./reusable-workflows/basic-test.yml)
- [Check Dist Directory](./reusable-workflows/check-dist.yml)
- [Update Configs](./reusable-workflows/update-configs.yml)

## Actions

- use-pinned-actions (in development)

## Configs

- [Superlinter sample .env file](./config-templates/.env.superlinter-sample)
- [Markdown lint configs](./config-templates/.markdown-lint.yml)
- [Yaml lint configs](./config-templates/.yaml-lint.yml)
- [Eslint configs](./config-templates/eslint.config.ts)
- [Prettier configs](./config-templates/prettier.config.js)
- [TypeScript configs](./config-templates/tsconfig.github.json)
