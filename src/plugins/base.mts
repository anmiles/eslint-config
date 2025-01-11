import type { Linter } from 'eslint';
import eslintPlugin from '@eslint/js';

export default [
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

		rules : {
			...eslintPlugin.configs.recommended.rules,

			'arrow-body-style'        : [ 'error' ],
			'camelcase'               : [ 'error' ],
			'complexity'              : [ 'error' ],
			'curly'                   : [ 'error' ],
			'func-style'              : [ 'error', 'declaration', { allowArrowFunctions : true } ],
			'max-params'              : [ 'error', { max : 5 } ],
			'no-eval'                 : [ 'error' ],
			'no-extra-bind'           : [ 'error' ],
			'no-implied-eval'         : [ 'error' ],
			'no-loop-func'            : [ 'error' ],
			'no-useless-assignment'   : [ 'error' ],
			'no-useless-rename'       : [ 'error' ],
			'no-unused-vars'          : [ 'error', { varsIgnorePattern : '^_', caughtErrorsIgnorePattern : '^_' } ],
			'no-var'                  : [ 'error' ],
			'object-shorthand'        : [ 'error' ],
			'prefer-const'            : [ 'error' ],
			'prefer-numeric-literals' : [ 'error' ],
			'prefer-template'         : [ 'error' ],
			'no-useless-constructor'  : [ 'error' ],
			'yoda'                    : [ 'error' ],
		},
	},
] satisfies Linter.Config[];
