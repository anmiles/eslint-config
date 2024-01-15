# @anmiles/eslint-config

Base eslint config for all projects

## Installation

`npm install --save-dev @anmiles/eslint-config`

## Usage

### Eslint will automatically ignore files that listed in `.gitignore`

`package.json:`
``` json
	"scripts": {
		"lint": "eslint --ext .js,.ts --ignore-path .gitignore ."
	}
```

`.eslintrc.js`:
``` js
module.exports = {
	root    : true,
	extends : [
		'./node_modules/@anmiles/eslint-config/.eslintrc.js',
	],
};
```

### To add ignores that somehow doesn't fall into `.gitignore`, list them explicitly:

`.eslintrc.js`:
``` js
module.exports = {
	root    : true,
	extends : [
		'./node_modules/@anmiles/eslint-config/.eslintrc.js',
	],
	ignorePatterns : [
		'**/somedir/',
		'somefile.js'
	],
};
```
