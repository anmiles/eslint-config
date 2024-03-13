# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [6.0.0](../../tags/v6.0.0) - 2024-02-09
### Added
- Plugins for React and TSX
- Recommended rules for `import` plugin
- Recommended rules for `@typescript-eslint` plugin
- Plugins that are used to be installed with `npm init @eslint/config`:
  - `n`
  - `promise`
### Changed
- Migrate stylistic rules to `@stylistic` due to moving formatting rules out of ESLint (see https://eslint.style/guide/why)
- Split into presets to support different combinations of configs.
__:exclamation: Old "default" extend path `./node_modules/@anmiles/eslint-config/.eslintrc.js` doesn't work anymore. Replace it with one of [presets](README.md#presets) or combination of presets__
- Update dependency `@typescript-eslint/eslint-plugin` to new major version
- Change minimal supported NodeJS version from `18.14.2` to `18.18.0`

## [5.0.2](../../tags/v5.0.2) - 2024-01-30
### Changed
- Migrate to GitHub

## [5.0.1](../../tags/v5.0.1) - 2024-01-29
### Changed
- Explicitly specify ignores from .gitignore in .eslintrc.js

## [5.0.0](../../tags/v5.0.0) - 2024-01-15
### Changed
- Revert ESM

## [4.0.1](../../tags/v4.0.1) - 2024-01-14
### Added
- Add .npmignore

## [4.0.0](../../tags/v4.0.0) - 2024-01-14
### Changed
- Follow .gitignore

## [3.0.0](../../tags/v3.0.0) - 2024-01-14
### Changed
- Migrate to ESM

## [2.0.4](../../tags/v2.0.4) - 2023-11-12
### Changed
- Update dependencies

## [2.0.3](../../tags/v2.0.3) - 2023-11-12
### Changed
- Update dependencies

## [2.0.2](../../tags/v2.0.2) - 2023-11-12
### Changed
- Update dependencies

## [2.0.1](../../tags/v2.0.1) - 2023-11-12
### Changed
- Update dependencies

## [2.0.0](../../tags/v2.0.0) - 2023-09-11
### Changed
- Update dependencies

## [1.0.6](../../tags/v1.0.6) - 2023-05-07
### Changed
- Cleanup cSpell words

## [1.0.5](../../tags/v1.0.5) - 2023-05-07
### Changed
- Added keywords to package.json

## [1.0.4](../../tags/v1.0.4) - 2023-05-06
### Changed
- Fix instruction to install as devDependency

## [1.0.2](../../tags/v1.0.2) - 2023-05-06
### Changed
- Move project to `lib` namespace

## [1.0.1](../../tags/v1.0.1) - 2023-05-06
### Changed
- Add usage details to README

## [1.0.0](../../tags/v1.0.0) - 2023-05-06
### Changed
- First release
