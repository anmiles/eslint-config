import eslintPlugin from '@eslint/js';
import type { Linter } from 'eslint';

import { patterns } from '../lib/constants.mjs';

const config: Linter.Config[] = [
	{
		files: patterns.base,

		rules: {
			...eslintPlugin.configs.recommended.rules,

			'arrow-body-style': [ 'error' ],
			'camelcase'       : [ 'error' ],
			'complexity'      : [ 'error' ],
			'curly'           : [ 'error' ],
			'func-style'      : [ 'error', 'declaration', {
				allowArrowFunctions: true,
			} ],
			'max-params': [ 'error', {
				max: 5,
			} ],
			'no-console'           : [ 'error' ],
			'no-eval'              : [ 'error' ],
			'no-extra-bind'        : [ 'error' ],
			'no-implied-eval'      : [ 'error' ],
			'no-loop-func'         : [ 'error' ],
			'no-useless-assignment': [ 'error' ],
			'no-useless-rename'    : [ 'error' ],
			'no-unused-vars'       : [ 'error', {
				varsIgnorePattern        : '^_',
				caughtErrorsIgnorePattern: '^_',
			} ],
			'no-var'                 : [ 'error' ],
			'object-shorthand'       : [ 'error' ],
			'prefer-const'           : [ 'error' ],
			'prefer-numeric-literals': [ 'error' ],
			'prefer-template'        : [ 'error' ],
			'preserve-caught-error'  : [ 'error' ],
			'no-useless-constructor' : [ 'error' ],
			'yoda'                   : [ 'error' ],
		},
	},
];

export default config;
