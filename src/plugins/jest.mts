import type { Linter } from 'eslint';
import jestPlugin from 'eslint-plugin-jest';

export default [
	{
		plugins : {
			'jest' : jestPlugin,
		},

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

		rules : {
			...jestPlugin.configs['flat/recommended'].rules,

			'n/no-unpublished-import'           : [ 'off' ],
			'@typescript-eslint/unbound-method' : [ 'off' ], // access method to check whether it have been called

			'jest/no-standalone-expect' : [ 'error' ],
			'jest/valid-title'          : [ 'error', { ignoreTypeOfDescribeName : true } ],
		},
	},
] satisfies Linter.Config[];
