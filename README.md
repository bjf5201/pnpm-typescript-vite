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

- [TypeScript CI (using PNPM package manager)](./.github/workflows/typescript-ci.yml)
- [Dependabot](./.github/dependabot.yml)

### Reusable Workflows

- [Basic Test](./.github/workflows/reusable-basic-test.yml)
  - Essentially acts as a continuous integration workflow; a workflow that can be run on every push to a trunk branch to prevent breaking code from being committed.
- [Check Dist Directory](./.github/workflows/reusable-check-dist.yml)
  - Ensures that the dist artifact from the previous
- [Testing](./.github/workflows/reusable-testing.yml)
- [Update Configs](./.github/workflows/reusable-update-configs.yml)

## Actions

- use-pinned-actions (in development)

## Configs

- [**.gitignore**](./config-templates/.gitignore)
- [**PNPM/Node configs via .nvmrc**](./config-templates/.nvmrc)
- [**.prettierignore**](./config-templates/.prettierignore)
  - _Note: Check if still necessary?_
- [**Yaml Lint Configs**](./config-templates/.yaml-lint.yml)
- [**Eslint Configs**](./config-templates/eslint.config.ts)
- [**PostCSS Configs**](./config-templates/postcss.config.cjs)
- [**Prettier Configs**](./config-templates/prettier.config.js)
- [**Tailwind Configs**](./config-templates/tailwind.config.js)
- [**Environment Variables**](./config-templates/template.env)
- **TypeScript Configs**
  - [Main Project Configs](./config-templates/tsconfig.json)
  - [Browser Configs](./config-templates/tsconfig.browser.json)
  - [Node Configs](./config-templates/tsconfig.node.json)
- [**Vite and Vitest Configs**](./config-templates/vite.config.js)
  - If only using Vitest, you can pull out the configs under `test` property and move into its own `vitest.config.js`, with perhaps some additional tweaking.

## Tasks

Turn these into issues and track in "Dot Files" project.

- Set up local TypeScript CI
  - Fix eslint
  - Fix commitlint/commitizen setup
  - Set up lint-staged
  - Set up semantic versioning tool
  - Set up changesets
  - Set up unit tests sample test files
  - Set up UI test sample test files and setup
  - Set up integration tests setup and sample test files
  - Set up e2e tests setup and sample test files
- Create project on GitHub
- Create issues on GitHub
- Set up remote TypeScript CI via GitHub Actions
  - Set up pre-commit workflow
  - Set up (or re-check current)CI workflow(s). List items below do not necessarily represent individual workflows, but steps in the process.
    - Setup
    - Cache package manager files
    - Basic Checks (linting, formatting, and unit tests) that can be done on each commit (make sure unit test commands use `pnpm run test:ci`)
    - Build app (make sure commands use `pnpm run build`)
    - Upload artifacts
    - Upload test coverage to CodeCov
    - Download artifacts / Setup
- Set up AWS infrastructure via Terraform
- Set up testing via GitHub Actions - (integration, e2e - tests that take longer than 2-4 minutes to run that should be placed later in CI pipeline)
  - Setup & Download Build artifacts
  - Deploy to Staging cluster on AWS
  - Integration testing
  - Upload testing artifact
  - E2E testing
  - Upload testing artifact
- Set up TypeScript CD via GitHub Actions
  - Setup & Download Artifacts
  - Connect to AWS clusters
  - Deploy to AWS (as necessary)
  - Changesets
  - Bump package version
  - Deploy to JSR registry (as necessary)
- Set up Yaml Lint
- Set up Markdown Lint? [template here](https://github.com/BretFisher/github-actions-templates/.github/linters)
