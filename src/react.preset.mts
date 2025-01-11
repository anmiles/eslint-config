import type { Linter } from 'eslint';
import globals from 'globals';
import stylisticJsxPlugin from './plugins/@stylistic.jsx.mjs';
import i18NextPlugin from './plugins/i18next.mjs';
import reactPlugin from './plugins/react.mjs';
import reactHooksPlugin from './plugins/react-hooks.mjs';
import reactReduxPlugin from './plugins/react-redux.mjs';
import reactRefreshPlugin from './plugins/react-refresh.mjs';

export default [
	...stylisticJsxPlugin,
	...i18NextPlugin,
	...reactPlugin,
	...reactHooksPlugin,
	...reactReduxPlugin,
	...reactRefreshPlugin,

	{
		files : [
			'**/*.js',
			'**/*.mjs',
			'**/*.cjs',
			'**/*.ts',
			'**/*.cts',
			'**/*.mts',
			'**/*.jsx',
			'**/*.tsx',
		],

		languageOptions : {
			ecmaVersion : 2022,
			sourceType  : 'module',
			globals     : {
				...globals.es2021,
				...globals.browser,
			},
			parserOptions : {
				ecmaFeatures : {
					jsx : true,
				},
			},
		},

		linterOptions : {
			reportUnusedDisableDirectives : 'warn',
		},
	},
] satisfies Linter.Config[];
