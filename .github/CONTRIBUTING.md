# Snowye UI Contributing Guide

Hi! We're really excited that you are interested in contributing to Snowye UI. Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

- [Code of Conduct](https://github.com/Sn0wye/snowye-ui/blob/main/.github/CODE_OF_CONDUCT.md)
- [Pull Request Guidelines](#pull-request-guidelines)

## Pull Request Guidelines

- Checkout a topic branch from the relevant branch, e.g. `main`, and merge back against that branch.

- If adding a new feature:

  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.

- If fixing bug:

  - Provide a detailed description of the bug in the PR. Live demo preferred.

- It's OK to have multiple small commits as you work on the PR - GitHub can automatically squash them before merging.

- Commit messages must follow the [commit message convention](./COMMIT-CONVENTION.md) so that changelogs can be automatically generated.

## Development Setup

You will need [yarn](https://https://yarnpkg.com/)

After cloning the repo, run:

```sh
# install the dependencies of the project
$ yarn install
```

### Setup Dev Environment

The easiest way to start testing out Snowye UI is to tweak the Snowye UI docs. You may run `yarn dev:docs` to boot up Snowye UI documentation site locally, with live reloading of the source code.

```sh
$ yarn dev:docs
```

After executing the above command, visit http://localhost:3000 and try modifying the source code. You'll get live update.

<!-- TODO: Add link -->
#### Alternatively you can head up to the documentation website at (https://snowye-ui.snowye.dev/docs/getting-started/)[https://snowye-ui.snowye.dev/docs/getting-started/]

If you don't need docs site up and running, you may start Snowye UI local dev environment with `yarn dev`.

```sh
$ yarn dev
```