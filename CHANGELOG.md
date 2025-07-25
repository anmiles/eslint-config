# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [9.0.3](../../tags/v9.0.3) - 2025-07-24
### Changed
- Fix vulnerable dependencies

## [9.0.2](../../tags/v9.0.2) - 2025-06-03
### Changed
- Fixed migration step (uninstalling old packages)

## [9.0.1](../../tags/v9.0.1) - 2025-06-03
### Changed
- Fixed typo in README.md

## [9.0.0](../../tags/v9.0.0) - 2025-05-18
__(BREAKING) Version 9 is based on ESLint V9 flat configuration. See [migration guide](MIGRATION.md) for details.__

__(BREAKING) Dropped support for NodeJS 18 (EOL). Minimum required version is now NodeJS 20.__

### Added
- Plugins and rules for them:
	- `@eslint/css`
	- `@eslint/json`
	- `@eslint/markdown`
	- `eslint-plugin-i18next`
- Added new rules:
	- `@stylistic/type-annotation-spacing`
	- `@stylistic/type-generic-spacing`
	- `@typescript-eslint/no-unsafe-type-assertion`
	- `no-useless-assignment`
	- `no-useless-constructor`
	- `jest/prefer-jest-mocked`
	- `promise/prefer-catch`
	- `promise/spec-only`
	- `react/jsx-props-no-spread-multi`
- Enabled rules:
	- `no-console`
	- `no-irregular-whitespace` for react
- Exported constants ([see details](README.md#exported-constants))
	- `extensions`
	- `patterns`

### Changed
- Migrated to NodeJS 20.19
- Migrated to ESLint V9 flat configs
- Updated dependencies
- Migrated from `eslint-plugin-json` plugin to `@eslint/json` plugin
- Updated existing rules:
	- `@stylistic/indent`
		- added option `offsetTernaryExpressions : true`
		- added option `offsetTernaryExpressionsOffsetCallExpressions : true`
	- `@stylistic/key-spacing`
		- changed option `beforeColon` to `false`
		- added option `ignoredNodes: [ 'TSInterfaceBody', 'TSTypeLiteral', 'ClassBody' ]`
	- `@stylistic/max-len`
		- removed option `ignoreStrings : true`
		- added option `ignoreComments : true`
		- added option `ignoreRegExpLiterals : true`
		- added option `ignoreTemplateLiterals : true`
	- `@stylistic/no-extra-parens`
		- added option `nestedConditionalExpressions : false`
	- `@stylistic/object-property-newline`
		- renamed option `allowMultiplePropertiesPerLine` to `allowAllPropertiesOnSameLine`
	- `@stylistic/quotes`
		- added option `allowTemplateLiterals : 'avoidEscape'`
	- `@stylistic/generator-star-spacing`
		- changed `neither` to `after`
	- `@stylistic/type-annotation-spacing`
		- changed option `before` to `false`
	- `@typescript-eslint/explicit-module-boundary-types`
		- added option `allowOverloadFunctions: true`
	- `@typescript-eslint/no-unused-vars`
		- added option `caughtErrorsIgnorePattern : '^_'`
	- `no-unused-vars`
		- added option `caughtErrorsIgnorePattern : '^_'`
	- `import/extensions`
		- adapted options for new config
	- `import/order`
		- changed option `groups`: added `object`, moved `unknown` to the very end, removed `no-irregular-whitespace`
		- added option `named : true`
		- added option `alphabetize : { order : 'asc', caseInsensitive : true }`
		- added option `'newlines-between' : 'always'`
		- added option `warnOnUnassignedImports : true`
	- `n/no-extraneous-import`
		- enabled
		- added option `allowModules`
	- `react-refresh/only-export-components`
		- added option `customHOCs`

### Removed
- Deleted rules that were previously disabled:
	- `n/no-missing-require`
	- `n/no-missing-import`
- Deleted rules:
	- `@stylistic/jsx-indent`
- Disabled rules:
	- `no-redeclare` for typescript
	- `n/no-missing-import` for typescript
	- `n/no-unpublished-import` for Vite config files
	- `import/exports-last`
	- `import/group-exports`

## [8.1.0](../../tags/v8.1.0) - 2024-12-26
### Changed
- Update all dependencies to latest versions that still support ESLint V8 only

## [8.0.8](../../tags/v8.0.8) - 2024-04-19
### Changed
- Allow arbitrary sort of unions and intersections

## [8.0.7](../../tags/v8.0.7) - 2024-04-18
### Changed
- Do not use eslint to check resolved imports in typescript files

## [8.0.6](../../tags/v8.0.6) - 2024-04-18
### Changed
- Allow return void promises

## [8.0.5](../../tags/v8.0.5) - 2024-04-15
### Changed
- Allow single-line arrow functions in react event handlers

## [8.0.3](../../tags/v8.0.3) - 2024-04-14
### Changed
- Fix tags in CHANGELOG.md

## [8.0.2](../../tags/v8.0.2) - 2024-04-14
### Changed
- `react/sort-comp` to put instance variables before everything

## [8.0.1](../../tags/v8.0.1) - 2024-03-30
### Removed
- Remove jsx-closing-tag-location rule to allow closing tags to be on the same line as multiline opening tags

## [8.0.0](../../tags/v8.0.0) - 2024-03-30
### Changed
- Do not split double curly spaces with a space in jsx

## [7.1.2](../../tags/v7.1.2) - 2024-03-26
### Changed
- Update dependencies

## [7.1.1](../../tags/v7.1.1) - 2024-03-20
### Changed
- @typescript-eslint/restrict-template-expressions * explicitly set `allowNumber` since numbers aren't allowed anymore in strict preset

## [7.1.0](../../tags/v7.1.0) - 2024-03-20
### Changed
- Update dependencies
- Update rules according to changes in plugins

## [7.0.1](../../tags/v7.0.1) - 2024-03-16
### Changed
- Remove redundant parameter from the lint command

## [7.0.0](../../tags/v7.0.0) - 2024-03-16
### Added
- Enable 'import/exports-last' rule since keeping all exports on the top is not always possible because of exported constants and classes
### Changed
- Imply using .eslintignore file in README.md

## [6.0.2](../../tags/v6.0.2) - 2024-03-15
### Changed
- Disable `n/no-missing-require` as require() is anyway never allowed in app files but causes false-positives in test files

## [6.0.1](../../tags/v6.0.1) - 2024-03-15
### Changed
- Update `@stylistic/eslint-plugin`

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
