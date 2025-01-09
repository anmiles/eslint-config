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
1. Extend all needed presets in your `./eslint.config.mjs`
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
1. Specify npm command

	```json
	"lint": "eslint"
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
import { basePreset, tsPreset, jestPreset } from './dist/index.mjs';

export default [
	...basePreset,
	...tsPreset,
	...jestPreset,
	{
		ignores : [
			'dist/*',
			'coverage/*',
		],
	},
];
```

#### Notes
- `package-lock.json` doesn't have to be ignored. It's already ignored in configuration for `json` plugin inside `base` preset.
- `node_modules` doesn't have to be ignored. It's implicitly ignored by ESLint.
- Don't keep `.eslintignore` file when using Flat Config. Use `ignores` config key instead (see the example above).

# TODO: update project to use ESM and check whether how this can be used in CommonJS projects

# TODO: update all rules in plugins following their release updates:
Releases · eslint/eslint
https://github.com/eslint/eslint/releases?page=3

Releases · eslint-stylistic/eslint-stylistic
https://github.com/eslint-stylistic/eslint-stylistic/releases?page=3

Releases · typescript-eslint/typescript-eslint
https://github.com/typescript-eslint/typescript-eslint/releases?page=3

Releases · import-js/eslint-plugin-import
https://github.com/import-js/eslint-plugin-import/releases

Releases · jest-community/eslint-plugin-jest
https://github.com/jest-community/eslint-plugin-jest/releases?page=3

Releases · ota-meshi/eslint-plugin-jsonc
https://github.com/ota-meshi/eslint-plugin-jsonc/releases

Releases · eslint-community/eslint-plugin-n
https://github.com/eslint-community/eslint-plugin-n/releases?page=4

Releases · eslint-community/eslint-plugin-promise
https://github.com/eslint-community/eslint-plugin-promise/releases?page=1

react/packages/eslint-plugin-react-hooks/CHANGELOG.md at main · facebook/react
https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/CHANGELOG.md

Releases · DianaSuvorova/eslint-plugin-react-redux
https://github.com/DianaSuvorova/eslint-plugin-react-redux/releases

Releases · ArnaudBarre/eslint-plugin-react-refresh
https://github.com/ArnaudBarre/eslint-plugin-react-refresh/releases?page=1

no-useless-assignment - ESLint - Pluggable JavaScript Linter
https://eslint.org/docs/latest/rules/no-useless-assignment#rule-details

@eslint/json - npm
https://www.npmjs.com/package/@eslint/json

Configuration Migration Guide - ESLint - Pluggable JavaScript Linter
https://eslint.org/docs/latest/use/configure/migration-guide

# TODO: check whether default and recommended rules work and show errors in case of mistakes (for ALL plugins)

# TODO: include in migration guide
# TODO: different lists for different presets
# TODO: replace ../lib/eslint-config with @anmiles/eslint-config
# TODO: --save-dev or --save-peer for end-project configs?
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
