# Migration to ESLint V9 flat configuration

## Dependencies

_Please strictly follow the install sequence below in order to avoid errors about peer dependencies_

1. Uninstall outdated dependencies
	```bash
	npm uninstall @anmiles/eslint-config @stylistic/eslint-plugin @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-import-resolver-typescript eslint-plugin-align-assignments eslint-plugin-import eslint-plugin-jest eslint-plugin-jsonc eslint-plugin-n eslint-plugin-promise eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-redux eslint-plugin-react-refresh
	```
1. Install this package and required devDependencies
	- see [README.md](README.md#installation)

## Configuration changes

1. Rename `eslintrc` files to `eslint.config.mts` (or `eslint.config.mjs` if not using typescript)

1. Remove `root: true` option. Flat config files always act as if root: true is set.

1. Switch to ESM export (although the config still might by used in CommonJS projects)
	- BEFORE:
		```js
		module.exports { /* configuration */ };
		```
	- AFTER:
		```js
		export default [ /* array of configurations */ ];
		```

1. Export an array of configurations instead of declaring overrides
	- BEFORE:
		```js
		module.exports = {
			overrides : [
				{ /* configuration 1 */ },
				{ /* configuration 2 */ },
			],
		};
		```
	- AFTER:
		```js
		export default [
			{ /* configuration 1 */ },
			{ /* configuration 2 */ },
		];
		```
		Please make sure that every configuration has `files` option.

1. Import base configs rather than declare them literally
	- BEFORE:
		```js
		extends: [
			"eslint:recommended",
			"custom-config",
		],
		```
	- AFTER:
		```js
		import js from '@eslint/js';
		import customConfig from 'custom-config';
		/* ... */
		export default [
			js.configs.recommended,
			customConfig,
			{ /* override configuration */ },
		];
		```

1. Import plugins rather than declare them literally
	- BEFORE:
		```js
		plugins: ["jsdoc"],
		```
	- AFTER:
		```js
		import jsdoc from 'eslint-plugin-jsdoc';
		/* ... */
		plugins : { jsdoc },
		```

1. Import parsers rather than declare them literally
	- BEFORE:
		```js
		parser: "@babel/eslint-parser",
		```
	- AFTER:
		```js
		import babelParser from '@babel/eslint-parser';
		/* ... */
		languageOptions : {
			parser : babelParser,
		},
		```

1. Import globals rather than declare them literally
	- BEFORE:
		```js
		env: {
			browser: true,
		},
		```
	- AFTER:
		```js
		import { globals } from '@anmiles/eslint-config';
		/* ... */
		languageOptions : {
			globals : {
				...globals.browser,
			},
		},
		```

1. Place custom globals into `languageOptions` together with built-in globals
	- BEFORE:
		```js
		globals: {
			custom: 'value',
		},
		```
	- AFTER:
		```js
		languageOptions : {
			globals : {
				custom : 'value',
			},
		},
		```

1. Move parser options into `languageOptions`
	- BEFORE:
		```js
		parserOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
		},
		```
	- AFTER:
		```js
		languageOptions : {
			ecmaVersion : 2022,
			sourceType : "module",
		},
		```

1. Move `reportUnusedDisableDirectives` into `linterOptions`
	- BEFORE:
		```js
		reportUnusedDisableDirectives: true,
		```
	- AFTER:
		```js
		linterOptions: {
			reportUnusedDisableDirectives : 'warn',
		},
		```

1. Replace `ignorePatterns` option with `ignores` and use globs
	- BEFORE:
		```js
		ignorePatterns: [
			'temp.js',
			'config/*',
		],
		```
	- AFTER:
		```js
		ignores : [
			'**/temp.js',
			'config/*',
		],
		```

1. Use globs in `files` option
	- BEFORE:
		```js
		files: [
			'*.ts',
			'*.tsx',
		],
		```
	- AFTER:
		```js
		files : [
			'**/*.ts',
			'**/*.tsx',
		],
		```

## Command line changes (also applied for lint command in package.json)

1. Replace `--no-eslintrc` flag with `--no-config-lookup`

1. Do not specify path (`.`), it's by default now

1. Do not specify `ext` in lint command; specify `files` in the configuration instead:
	- BEFORE:
		`package.json`:
		```js
		--ext .ts,.tsx
		```
	- AFTER:
		`configuration`:
		```js
		files : [
			'**/*.ts',
			'**/*.tsx',
		],
		```

1. Move everything from `eslintConfig` section in `package.json` to configuration file

## Code changes

1. Replace `eslint-env` directive with `global` or declare appropriate globals in the configuration
	- BEFORE:
		```js
		/* eslint-env mocha */
		```
	- AFTER:
		either in-place
		```js
		/* global describe, it -- here are globals that defined by Mocha */
		```
		or configuration
		```js
		languageOptions : {
			globals : {
				...globals.mocha,
			},
		},
		```

1. Move ignores from `.eslintignore` to `ignores` option and get rid of `.eslintignore`
	- BEFORE:
		`.eslintignore`:
		```txt
		temp.js
		config/*
		```
	- AFTER:
		`configuration`:
		```js
		ignores : [
			'**/temp.js',
			'config/*',
		],
		```
		or use pre-defined patterns ([see more](README.md#exported-constants))
		```js
		import { patterns } from '@anmiles/eslint-config';
		/* ... */
		ignores : patterns.base,
		```

See [examples](README.md#example) of final configurations.

## Other notes

See [notes](README.md#notes).

## Links

- [Official Configuration Migration Guide](https://eslint.org/docs/latest/use/configure/migration-guide)
- [Release notes of ESLint plugins](README.md#links)

