import type { Linter } from 'eslint';
import jestPlugin from 'eslint-plugin-jest';

import { patterns } from '../lib/constants.mjs';

const config: Linter.Config[] = [
	{
		plugins: {
			'jest': jestPlugin,
		},

		files: patterns.jest,

		rules: {
			...jestPlugin.configs['flat/recommended'].rules,

			'i18next/no-literal-string': [ 'off' ],
			'n/no-unpublished-import'  : [ 'off' ],

			'jest/no-standalone-expect'             : [ 'error' ],
			'jest/no-unnecessary-assertion'         : [ 'error' ],
			'jest/no-unneeded-async-expect-function': [ 'error' ],
			'jest/prefer-jest-mocked'               : [ 'error' ],
			'jest/prefer-mock-return-shorthand'     : [ 'error' ],
			'jest/prefer-to-have-been-called'       : [ 'error' ],
			'jest/valid-expect-with-promise'        : [ 'error' ],
			'jest/valid-mock-module-path'           : [ 'error' ],
			'jest/valid-title'                      : [ 'error', {
				ignoreTypeOfDescribeName: true,
			} ],
		},
	},
];

export default config;
