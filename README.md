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

## GitHub Actions & Workflows

### Workflow Templates

In this repo, "Workflow Templates" does not refer to the feature GitHub has where you can call workflow's as templates. It refers to templates that can be copied and pasted or used with this repo when the repo is utilized as a template.

- [TypeScript CI (using PNPM package manager)](./.github/workflows/typescript-ci.yml)
- [Dependabot](./.github/dependabot.yml)

### Reusable Workflows

- [Basic Test](./.github/workflows/reusable-basic-test.yml)
  - Essentially acts as a continuous integration workflow; a workflow that can be run on every push to a trunk branch to prevent breaking code from being committed.
- [Check Dist Directory](./.github/workflows/reusable-check-dist.yml)
  - Ensures that the dist artifact from the previous workflow matches the dist artifact created from the current workflow's source code.
  - TODO: Is this redundant?
- [Testing](./.github/workflows/reusable-testing.yml)
  - Includes integration and e2e testing. Unit testing is all done in 'reusable-basic-test' workflow.
- [Update Configs](./.github/workflows/reusable-update-configs.yml)
  - Workflow to keep configs that utilize configs from a central repo aligned with the central repo configs.

## Actions

- use-pinned-actions (in development)

## Configs

- [**.gitignore**](.gitignore)
- [**PNPM/Node configs via .npmrc**](./.npmrc)
- [**.prettierignore**](./.prettierignore)
  - Find out how to use .gitignore as .prettierignore? Like eslint is able to.
- **Yaml Lint Configs** - in development
- [**Eslint Configs**](./eslint.config.js)
- [**PostCSS Configs**](./postcss.config.cjs)
- [**Prettier Configs**](./prettier.config.js)
- [**Tailwind Configs**](./tailwind.config.js)
- [**Environment Variables**](./.env.development)
- **TypeScript Configs**
  - [Project Configs](./tsconfig.json)
  - [Base Configs](./tsconfig.base.json)
  - [App (Browser) Configs](./tsconfig.app.json)
  - [Node Configs](./tsconfig.node.json)
- [**Vite and Vitest Configs**](./vite.config.ts)
  - If only using Vitest, you can pull out the configs under `test` property and move into its own `vitest.config.{ts,js}`, see docs here:
  - [https://vitest.dev/config/](https://vitest.dev/config/)

## Tasks - First Release

Turn these into issues and track in "Dot Files" project.

- Set up local TypeScript CI
  - Fix commitlint/commitizen setup
  - Set up semantic versioning tool/release system
  - Set up changesets
  - Set up unit tests sample test files
  - Set up UI test sample test files and setup
  - Set up integration tests setup and sample test files
  - Set up e2e tests setup and sample test files

## Tasks - next release

- Create project on GitHub
- Create issues on GitHub
- Set up remote TypeScript CI via GitHub Actions
  - Set up pre-commit workflow
  - Set up (or re-check current)CI workflow(s). List items below do not necessarily represent individual workflows, but steps in the process.
    - Setup
    - Cache package manager files
      - See [this workflow's `Restore cached node_modules` step](https://github.com/reactjs/react.dev/blob/main/.github/workflows/site_lint.yml)
    - Basic Checks (linting, formatting, and unit tests) that can be done on each commit
    - IF basic-checks passes, build app (make sure commands use `pnpm run build`)
    - Upload artifacts
    - Upload test coverage to CodeCov
    - Check dist?

## Tasks - Backlog

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
- Set up Markdown Lint? [template here from @BretFisher](https://github.com/BretFisher/github-actions-templates/.github/linters)
- Figure out how to move (at least most) config files into a `./.config/` direcotry
- Set up Knip linter
- Implement renovate (figure out different between Renovate and dependabot. Do you use both or just one?)
