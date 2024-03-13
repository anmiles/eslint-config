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
		- `npm install --save-dev eslint eslint-plugin-align-assignments eslint-plugin-import eslint-plugin-jsonc eslint-plugin-n eslint-plugin-promise @stylistic/eslint-plugin`
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
	ignorePatterns : [
		'someFile.js'
		'/rootDir/anotherFile.js'
		'**/someDir/',
	],
};
```

`package-lock.json` doesn't have to be ignored, it's already ignored in configuration for `jsonp` plugin inside `base` preset.
`node_modules` doesn't have to be ignored, it's implicitly ignored by ESLint.
