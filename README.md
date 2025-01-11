# @anmiles/eslint-config

Base eslint config for all projects

## Flat config

_This config is based on ESLint 9 flat config.
To keep using legacy config, please consider installing `@anmiles/eslint-config@8.1.0`_

## Presets

| Preset | Code                                                   |
|--------|--------------------------------------------------------|
| Base   | `import { basePreset } from '@anmiles/eslint-config'`  |
| TS     | `import { tsPreset } from '@anmiles/eslint-config'`    |
| React  | `import { reactPreset } from '@anmiles/eslint-config'` |
| Jest   | `import { jestPreset } from '@anmiles/eslint-config'`  |

For JS-only projects (without TS, Jest, React) use base preset.
For more complex projects use combination of presets.
__Note that `base` preset is mandatory in all cases.__

## Usage

1. Install this package
	- `npm install --save-dev @anmiles/eslint-config`
1. Install required devDependencies
	- Base dependencies for all files:
		- `npm install --save-dev eslint eslint-plugin-align-assignments eslint-plugin-import eslint-plugin-n eslint-plugin-promise @eslint/compat @eslint/js @eslint/json @eslint/markdown @stylistic/eslint-plugin`
	- Additional dependencies for TS:
		- `npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript`
	- Additional dependencies for React:
		- `npm install --save-dev eslint-plugin-react-hooks eslint-plugin-react-redux eslint-plugin-react-refresh`
	- Additional dependencies for Jest:
		- `npm install --save-dev eslint-plugin-jest`
1. Extend all needed presets in your `./eslint.config.mjs` (or `./eslint.config.js` for ESM projects)
	- For JS-only projects (without TS, React, Jest) use base preset:
		```js
		import { basePreset } from '@anmiles/eslint-config';

		export default [
			...basePreset,

			/* your own config */
		];
		```
	- For more complex projects use combination of presets
		- Backend TS project with Jest:
			```js
			import { basePreset, tsPreset, jestPreset } from '@anmiles/eslint-config';

			export default [
				...basePreset,
				...tsPreset,
				...jestPreset,

				/* your own config */
			];
			```
		- Frontend TS project with React and Jest:
			```js
			import { basePreset, tsPreset, jestPreset, reactPreset } from '@anmiles/eslint-config';

			export default [
				...basePreset,
				...tsPreset,
				...jestPreset,
				...reactPreset,

				/* your own config */
			];
			```
	- Also you can use type-checked config - `./eslint.config.mts` (or `./eslint.config.ts` for ESM projects)
		```ts
		import type { Linter } from 'eslint';
		import { basePreset, tsPreset, jestPreset, reactPreset } from '@anmiles/eslint-config';

		export default [
			...basePreset,
			...tsPreset,
			...jestPreset,
			...reactPreset,

			/* your own config */

		] satisfies Linter.Config[];
	```
1. Specify npm commands

	```json
	"lint": "eslint",
	"lint:fix": "eslint --fix"
	```

	- `--ext` parameter is not used in Flat Config mode
	- Specifying target directory (`.`) is not needed in Flat Config mode

## Example

`package.json`:
``` json
"scripts": {
	"lint": "eslint",
	"lint:fix": "eslint --fix"
}
```

`eslint.config.mjs` (with using ts and jest presets):
```js
import stylisticEslintPlugin from '@stylistic/eslint-plugin';
import { basePreset, tsPreset, jestPreset } from './dist/index.mjs';

export default [
	...basePreset,
	...tsPreset,
	...jestPreset,
	{
		plugins : {
			'@stylistic' : stylisticEslintPlugin,
		},
		rules : {
			'@stylistic/object-curly-newline'    : [ 'error', 'always' ],
			'@stylistic/object-property-newline' : [ 'error', {
				allowAllPropertiesOnSameLine : false,
			} ],
		},
	},
	{
		ignores : [
			'dist/*',
			'coverage/*',
			'**/__snapshots__/*',
		],
	},
];
```

## Notes
- `package-lock.json` doesn't have to be ignored. It's already ignored in configuration for `json` plugin inside `base` preset.
- `node_modules` doesn't have to be ignored. It's implicitly ignored by ESLint.
- Don't keep `.eslintignore` file when using Flat Config. Use `ignores` config key instead (see the example above).

## Links

### Release notes of ESLint plugins

- [Releases · @eslint/js](https://github.com/eslint/eslint/releases)

- [Releases · @eslint/json](https://github.com/eslint/json/releases)

- [Releases · @eslint/markdown](https://github.com/eslint/markdown/releases)

- [Releases · @stylistic/eslint-plugin](https://github.com/eslint-stylistic/eslint-stylistic/releases)

- [Releases · @typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/releases)

- [Releases · eslint-plugin-align-assignments](https://github.com/lucasefe/eslint-plugin-align-assignments/releases)

- [Releases · eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/releases)

- [Releases · eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest/releases)

- [Releases · eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n/releases)

- [Releases · eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise/releases)

- [Releases · eslint-plugin-react-hooks](https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/CHANGELOG.md)

- [Releases · eslint-plugin-react-redux](https://github.com/DianaSuvorova/eslint-plugin-react-redux/releases)

- [Releases · eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh/releases)

#### TODO: mention all added/changed/removed rules in CHANGELOG.md

## Official migration guide
Configuration Migration Guide - ESLint - Pluggable JavaScript Linter
https://eslint.org/docs/latest/use/configure/migration-guide

#### TODO: include link to the file that contains everything from TODO.md as an example of migration

#### TODO: check whether default and recommended rules work and show errors in case of mistakes (for ALL plugins)

#### TODO: include in migration guide
#### TODO: different lists for different presets
#### TODO: replace ../lib/eslint-config with @anmiles/eslint-config
npm install --save-dev ../lib/eslint-config @eslint/js@9.17.0 @eslint/json@0.9.0 @eslint/markdown@6.2.1 @stylistic/eslint-plugin@2.12.1 @typescript-eslint/eslint-plugin@8.18.2 eslint@9.17.0 eslint-plugin-align-assignments@1.1.2 eslint-plugin-import@2.31.0 eslint-plugin-jest@28.10.0 eslint-plugin-n@17.15.1 eslint-plugin-promise@7.2.1
npm uninstall eslint-plugin-jsonc
	npm install --save-dev @eslint/compat@latest
	npm install --save-dev @eslint/js@latest
	npm install --save-dev @eslint/json@latest
	npm install --save-dev @eslint/markdown@latest
	npm install --save-dev @stylistic/eslint-plugin@latest
	npm install --save-dev @typescript-eslint/eslint-plugin@latest
	npm install --save-dev @typescript-eslint/parser@latest
	npm install --save-dev eslint@latest
	npm install --save-dev eslint-import-resolver-typescript@latest
	npm install --save-dev eslint-plugin-align-assignments@latest
	npm install --save-dev eslint-plugin-import@latest
	npm install --save-dev eslint-plugin-jest@latest
	npm install --save-dev eslint-plugin-n@latest
	npm install --save-dev eslint-plugin-promise@latest
	npm install --save-dev eslint-plugin-react-hooks@latest
	npm install --save-dev eslint-plugin-react-redux@latest
	npm install --save-dev eslint-plugin-react-refresh@latest
