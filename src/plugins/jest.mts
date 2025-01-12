import type { Linter } from 'eslint';
import jestPlugin from 'eslint-plugin-jest';

import { patterns } from '../lib/constants.mjs';

export default [
	{
		plugins : {
			'jest' : jestPlugin,
		},

		files : patterns.jest,

		rules : {
			...jestPlugin.configs['flat/recommended'].rules,

			'i18next/no-literal-string' : [ 'off' ],
			'n/no-unpublished-import'   : [ 'off' ],

			'jest/no-standalone-expect' : [ 'error' ],
			'jest/prefer-jest-mocked'   : [ 'error' ],
			'jest/valid-title'          : [ 'error', {
				ignoreTypeOfDescribeName : true,
			} ],
		},
	},
] satisfies Linter.Config[];
