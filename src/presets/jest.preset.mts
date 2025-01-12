import type { Linter } from 'eslint';
import globals from 'globals';

import jestPlugin from '../plugins/jest.mjs';

export default [
	...jestPlugin,

	{
		files : [
			'**/*.test.js',
			'**/*.test.mjs',
			'**/*.test.cjs',
			'**/*.test.ts',
			'**/*.test.cts',
			'**/*.test.mts',
			'**/*.test.jsx',
			'**/*.test.tsx',
		],

		languageOptions : {
			ecmaVersion : 2022,
			sourceType  : 'module',
			globals     : {
				...globals.es2021,
				...globals.jest,
			},
		},

		linterOptions : {
			reportUnusedDisableDirectives : 'warn',
		},
	},
] satisfies Linter.Config[];
