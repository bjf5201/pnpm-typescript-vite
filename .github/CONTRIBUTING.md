See https://github.com/nayafia/contributing-template/blob/master/CONTRIBUTING-template.md

for help fleshing this out.
# Introduction

First off, thank you for considering contributing to this template! This is a pretty small project maintained by a solo developer (named [Bethany](https://github.com/bjf5201) if you're curious), so any help or suggestions are always appreciated!

## Why Read This?

## Ground Rules

## First Time Contributors

## Contributing

### How Can You Contribute?

Explain the types of contributions this project is looking for. (Not that these are the ONLY types of contributions people can make - just the most pressing ones.)

#### Report Bugs

Report bugs at https://github.com/bjf5201/typescript-pnpm-vite/issues

If you are reporting a bug, please include:

  - Your OS name and version
  - Any details about your local setup that might be helpful in troubleshooting
  - If possible, provide *detailed steps* to reproduce bug
  - If providing detailed reproduction steps of the bug is not possible, note your observations in as much detail as you can. Starting discussions about the issue are also welcome.

#### Fix Bugs

Look through the GitHub issues for the 'bug' label. Anything tagged with the 'help wanted' and 'bug' labels is open to whoever wants to take a crack at fixing it!

#### Implement Features

#### Write Documentation

#### Submit Feedback

### Set Up Local Dev Environment

#### Using CodeSpaces

#### Using Docker

#### Using Local Machine

### Contributor Guidelines & Conventions

#### Pull Request Conventions

#### Commit Conventions

This project uses [Conventional Commits (v1.0.0)](https://conventionalcommits.org/en/v1.0.0) when creating commit messages for this project. This allows for improved developer productivity by making the git history clear, concise, and easy-to-understand.

The commit message should follow the following template:

```sh
<type>[optional scope]: <subject (< 50chars in length)>
<BLANK LINE>
[optional body]
<BLANK LINE>
<Reviewed-by: Commiter Name>
[optional additional footer(s)]
```

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, an optional **scope**, and a **subject**.

Above, words surrounded by `<` and `>` characters (like `<this>`) are required. Words surrounded by `[` and `]` characters are optional.

In addition to this commit structure, please note the following requirements:

  1. Commits MUST be prefixed with a type, followed by the OPTIONAL scope, OPTIONAL `!` (which signifies a BREAKING CHANGE), and REQUIRED terminal colon and space (`: `).
  2. The type used in the commit message MUST be one of the following:
    - `feat` : introduces a new feature
    - `fix` : A bug fix
    - `build`: Changes that affect the build system or external dependencies (example scopes: pnpm, jenkins, docker)
    - `chore` : Doesn't fit into any of the other categories (in this project, mostly used with updating dependencies via dependabot. Scopes include pnpm, github-actions, and docker)
    - `ci` : Changes to CI configurations and / or scripts (example scopes: github-actions, vercel, scripts)
    - `docs` : Documentation only changes
    - `style` : Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc. DOES NOT REFER to changes to frontend appearance of application)
    - `refactor` : A code change that neither fixes a bug nor adds a feature nor fits into any of the other categories
    - `perf` : A code change that improves performance
    - `test` : Adding missing tests or correcting existing tests
    - `revert` : Reverting a previous commit
  3. The **header** can be no longer than **70 characters**.
  4. All other lines of the commit message can be no longer than **100 characters**.
  5. Use the imperative, present tense, i.e. "change" instead of "changed or "changes".
  6. Don't capitalize the first letter of the `<type>`, `<scope>`, or `<subject>`
  7. The footer should contain a closing reference to an issue, if any.

##### Commit Message Examples

```markdown
docs(changelog): update changelog to beta.5

Reviewed-by: Bethany Fannin <contact@bethanyfannin.com>
Refs: #4
```



#### Labeling Conventions

#### Coding Guidelines

#### Testing Guidelines

### Processes

#### How to Report a Bug

#### How to Suggest a Feature/Enhancement

#### Code Review Process

### Community