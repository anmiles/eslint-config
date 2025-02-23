import type { Linter } from 'eslint';
import globals from 'globals';

import { patterns } from '../lib/constants.mjs';
import jestPlugin from '../plugins/jest.mjs';

export default [
	...jestPlugin,

	{
		files : patterns.jest,

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
] as Linter.Config[];
