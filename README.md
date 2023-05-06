# @anmiles/eslint-config

Base eslint config for all projects

## Installation

`npm install @anmiles/eslint-config`

## Usage

`.eslintrc.js:`
``` js
module.exports = {
	root    : true,
	extends : [
		'./node_modules/@anmiles/eslint-config/.eslintrc.js',
	],
};
```
