import type { Linter } from 'eslint';
import globals from 'globals';

import basePlugin from './plugins/base.mjs';
import stylisticJsPlugin from './plugins/@stylistic.js.mjs';
import alignAssignmentsPlugin from './plugins/align-assignments.mjs';
import importPlugin from './plugins/import.mjs';
import nPlugin from './plugins/n.mjs';
import promisePlugin from './plugins/promise.mjs';
import jsonPlugin from './plugins/json.mjs';

export default [
	...basePlugin,
	...stylisticJsPlugin,
	...alignAssignmentsPlugin,
	...importPlugin,
	...nPlugin,
	...promisePlugin,
	...jsonPlugin,

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
				...globals.node,
			},
		},

		linterOptions : {
			reportUnusedDisableDirectives : 'warn',
		},
	},
] satisfies Linter.Config[];
