# @anmiles/eslint-config

Base eslint config for all projects

## Presets

| Preset | Extends path                                                |
|--------|-------------------------------------------------------------|
| Base   | `./node_modules/@anmiles/eslint-config/src/base.preset.js`  |
| TS     | `./node_modules/@anmiles/eslint-config/src/ts.preset.js`    |
| React  | `./node_modules/@anmiles/eslint-config/src/react.preset.js` |
| Jest   | `./node_modules/@anmiles/eslint-config/src/jest.preset.js`  |

For JS-only projects (without TS, Jest, React) use base preset.
For more complex projects use combination of presets.
__Note that `base` preset is mandatory in all cases.__

## Usage

1. Install this package
	- `npm install --save-dev @anmiles/eslint-config`
1. Install required devDependencies
	- Base dependencies for all files:
		- `npm install --save-dev eslint eslint-plugin-align-assignments eslint-plugin-import eslint-plugin-n eslint-plugin-promise @eslint/json @eslint/markdown @stylistic/eslint-plugin`
	- Additional dependencies for TS:
		- `npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript`
	- Additional dependencies for React:
		- `npm install --save-dev eslint-plugin-react-hooks eslint-plugin-react-redux eslint-plugin-react-refresh`
	- Additional dependencies for Jest:
		- `npm install --save-dev eslint-plugin-jest`
1. Extend all needed presets
	- For JS-only projects (without TS, React, Jest) use base preset:
		```js
		extends : [
			'./node_modules/@anmiles/eslint-config/src/base.preset.js',
		],
		```
	- For more complex projects use combination of presets
		- Backend TS project with Jest:
			```js
			extends : [
				'./node_modules/@anmiles/eslint-config/src/base.preset.js',
				'./node_modules/@anmiles/eslint-config/src/ts.preset.js',
				'./node_modules/@anmiles/eslint-config/src/jest.preset.js',
			],
			```
		- Frontend TS project with React and Jest:
			```js
			extends : [
				'./node_modules/@anmiles/eslint-config/src/base.preset.js',
				'./node_modules/@anmiles/eslint-config/src/ts.preset.js',
				'./node_modules/@anmiles/eslint-config/src/jest.preset.js',
				'./node_modules/@anmiles/eslint-config/src/react.preset.js',
			],
			```
1. Specify npm command
	- `--ext` parameter is redundant. According to [documentation](https://eslint.org/docs/latest/use/command-line-interface#--ext), default value is `.js` and the files that match the specified `overrides` entries. This is the way this config is being built: it targets specific extensions by using `overrides` entries and specifying particular extensions in `files` parameter. Therefore just including all needed presets in `.eslintrc` will make ESLint automatically cover all needed extensions.

## Example

`package.json`:
``` json
	"scripts": {
		"lint": "eslint ."
	}
```

`.eslintrc.js` (with using base preset):
``` js
module.exports = {
	root    : true,
	extends : [
		'./node_modules/@anmiles/eslint-config/src/base.preset.js',
	],
};
```

`.eslintignore`:
```
someFile.js
/rootDir/anotherFile.js
**/someDir/
```

#### Notes
# TODO: check whether this is true with new json plugin and mention native plugin instead of `jsonp`
- `package-lock.json` doesn't have to be ignored. It's already ignored in configuration for `jsonp` plugin inside `base` preset.
- `node_modules` doesn't have to be ignored. It's implicitly ignored by ESLint.

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

# TODO: include in migration guide
npm install --save-peer eslint-plugin-align-assignments@latest
npm install --save-peer eslint-plugin-import@latest
npm install --save-peer eslint-plugin-jest@latest
npm install --save-peer eslint-plugin-n@latest
npm install --save-peer eslint-plugin-promise@latest
npm install --save-peer eslint-plugin-react-hooks@latest
npm install --save-peer eslint-plugin-react-redux@latest
npm install --save-peer eslint-plugin-react-refresh@latest
npm install --save-peer @stylistic/eslint-plugin@latest
npm install --save-peer @typescript-eslint/eslint-plugin@latest
npm install --save-peer eslint@latest
npm install --save-peer @eslint/js@latest
npm install --save-peer @eslint/json@latest
npm install --save-peer @eslint/markdown@latest
npm uninstall eslint-plugin-jsonc
