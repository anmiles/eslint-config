# @anmiles/eslint-config

Base eslint config for all projects

## Flat config

_This config is based on ESLint 9 flat config.
To keep using legacy config, please consider installing `@anmiles/eslint-config@8.1.0`_

## Presets

| Preset | Code               |
|--------|--------------------|
| Base   | `...presets.base`  |
| TS     | `...presets.ts`    |
| React  | `...presets.react` |
| Jest   | `...presets.jest`  |

For JS-only projects (without TS, Jest, React) use base preset.
For more complex projects use combination of presets.
__Note that `base` preset is mandatory in all cases.__

## Installation

1. Install this package
	```bash
	npm install --save-dev ../eslint-config
	```
1. Install required devDependencies
	- Base dependencies for all files:
		```bash
		npm install --save-dev eslint eslint-plugin-align-assignments eslint-plugin-i18next eslint-plugin-import eslint-plugin-n eslint-plugin-promise @eslint/compat @eslint/js @eslint/json @eslint/markdown @stylistic/eslint-plugin
		```
	- Additional dependencies for TS:
		```bash
		npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript jiti typescript
		```
	- Additional dependencies for React:
		```bash
		npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-redux eslint-plugin-react-refresh
		```
	- Additional dependencies for Jest:
		```bash
		npm install --save-dev eslint-plugin-jest jest
		```

## Usage

1. Extend all needed presets in your `./eslint.config.mjs` (or `./eslint.config.js` for ESM projects)
	- For JS-only projects (without TS, React, Jest) use base preset:
		```js
		import { presets } from '@anmiles/eslint-config';

		export default [
			...presets.base,

			/* your own config */
		];
		```
	- For more complex projects use combination of presets
		- Backend TS project with Jest:
			```js
			import { presets } from '@anmiles/eslint-config';

			export default [
				...presets.base,
				...presets.ts,
				...presets.jest,

				/* your own config */
			];
			```
		- Frontend TS project with React and Jest:
			```js
			import { presets } from '@anmiles/eslint-config';

			export default [
				...presets.base,
				...presets.ts,
				...presets.jest,
				...presets.react,

				/* your own config */
			];
			```
	- Also you can use type-checked config - `./eslint.config.mts` (or `./eslint.config.ts` for ESM projects). This requires `jiti` ([why?](https://eslint.org/blog/2024/08/eslint-v9.9.0-released/))
		```ts
		import type { Linter } from 'eslint';
		import { presets } from '@anmiles/eslint-config';

		export default [
				...presets.base,
				...presets.ts,
				...presets.jest,
				...presets.react,

			/* your own config */

		] as Linter.Config[];
		```
1. Specify npm commands

	```json
	"lint": "eslint",
	"lint:fix": "eslint --fix"
	```

	- `--ext` parameter is not used in Flat Config mode
	- Specifying target directory (`.`) is not needed in Flat Config mode

## Example

Javascript:
```js
import stylisticEslintPlugin from '@stylistic/eslint-plugin';
import { patterns, presets } from '@anmiles/eslint-config';

export default [
	...presets.base,
	...presets.ts,
	...presets.jest,
	{
		files : patterns.base,
		rules : {
			'@stylistic/max-len' : [ 'error', {
				code           : 100,
				tabWidth       : 4,
				ignoreComments : true,
			} ],
			'@stylistic/object-property-newline' : [ 'error', {
				allowAllPropertiesOnSameLine : true,
			} ],
			// override for TS-ESM project
			'import/extensions' : [ 'error', 'ignorePackages', {
				'js'  : 'always',
				'mjs' : 'always',
				'ts'  : 'never',
				'mts' : 'never',
			} ],
		},
	},
	{
		files : patterns.ts,
		rules : {
			'@typescript-eslint/no-unsafe-type-assertion' : [ 'off' ],
		},
	},
	{
		ignores : [
			'coverage/*',
			'dist/*',
			'**/__snapshots__/*',
		],
	},
];
```

Typescript:
```ts
import stylisticEslintPlugin from '@stylistic/eslint-plugin';
import type { Linter } from 'eslint';
import { patterns, presets } from '@anmiles/eslint-config';

export default [
	...presets.base,
	...presets.ts,
	...presets.jest,
	{
		files : patterns.base,
		rules : {
			'@stylistic/max-len' : [ 'error', {
				code           : 100,
				tabWidth       : 4,
				ignoreComments : true,
			} ],
			'@stylistic/object-property-newline' : [ 'error', {
				allowAllPropertiesOnSameLine : true,
			} ],
			// override for TS-ESM project
			'import/extensions' : [ 'error', 'ignorePackages', {
				'js'  : 'always',
				'mjs' : 'always',
				'ts'  : 'never',
				'mts' : 'never',
			} ],
		},
	},
	{
		files : patterns.ts,
		rules : {
			'@typescript-eslint/no-unsafe-type-assertion' : [ 'off' ],
		},
	},
	{
		ignores : [
			'coverage/*',
			'dist/*',
			'**/__snapshots__/*',
		],
	},
] as Linter.Config[];
```

## Exported constants

Patterns and extensions are also exported.

```js
import { patterns, presets } from '@anmiles/eslint-config';

console.log(extensions.base); // [ '.js', '.mjs', '.cjs', '.jsx', '.ts', '.cts', '.mts', '.tsx' ]
console.log(extensions.jest); // [ '.test.js', '.test.mjs', '.test.cjs', '.test.jsx', '.test.ts', '.test.cts', '.test.mts', '.test.tsx' ]
console.log(patterns.ts);     // [ '**/*.ts', '**/*.cts', '**/*.mts', '**/*.tsx' ]
console.log(patterns.react);  // [ '**/*.js', '**/*.mjs', '**/*.cjs', '**/*.jsx', '**/*.ts', '**/*.cts', '**/*.mts', '**/*.tsx' ]
```

## Notes
- `package-lock.json` doesn't have to be ignored. It's already ignored in configuration for `json` plugin inside `base` preset.
- `node_modules` doesn't have to be ignored. It's implicitly ignored by ESLint.
- Remember to provide `files` option in override sections to specify a set of extensions for which the section applies.
  - There are some patterns to use ([see above](#exported-constants))
- Don't keep `.eslintignore` file when using Flat Config. Use `ignores` config key instead (see the example above).

## Migration to ESLint V9 flat configuration
Version 9 is based on ESLint V9 flat configuration. See [migration guide](MIGRATION.md) if you had been using version 8 or below.

## Links

### Release notes of ESLint plugins

- [Releases · @eslint/js](https://github.com/eslint/eslint/releases)

- [Releases · @eslint/json](https://github.com/eslint/json/releases)

- [Releases · @eslint/markdown](https://github.com/eslint/markdown/releases)

- [Releases · @stylistic/eslint-plugin](https://github.com/eslint-stylistic/eslint-stylistic/releases)

- [Releases · @typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/releases)

- [Releases · eslint-plugin-align-assignments](https://github.com/lucasefe/eslint-plugin-align-assignments/releases)

- [Releases · eslint-plugin-i18next](https://github.com/edvardchen/eslint-plugin-i18next/blob/main/CHANGELOG.md)

- [Releases · eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/releases)

- [Releases · eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest/releases)

- [Releases · eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n/releases)

- [Releases · eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise/releases)

- [Releases · eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react/releases)

- [Releases · eslint-plugin-react-hooks](https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/CHANGELOG.md)

- [Releases · eslint-plugin-react-redux](https://github.com/DianaSuvorova/eslint-plugin-react-redux/releases)

- [Releases · eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh/releases)
