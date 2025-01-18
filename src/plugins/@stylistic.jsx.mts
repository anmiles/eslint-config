import stylisticEslintPlugin from '@stylistic/eslint-plugin';
import type { ESLint, Linter } from 'eslint';

import { patterns } from '../lib/constants.mjs';

export default [
	{
		plugins : {
			'@stylistic' : stylisticEslintPlugin as ESLint.Plugin,
		},

		files : patterns.react,

		rules : {
			'@stylistic/jsx-closing-bracket-location' : [ 'error', 'line-aligned' ],
			'@stylistic/jsx-curly-brace-presence'     : [ 'error', {
				props             : 'never',
				children          : 'never',
				propElementValues : 'always',
			} ],
			'@stylistic/jsx-curly-newline' : [ 'error' ],
			'@stylistic/jsx-curly-spacing' : [ 'error', {
				when           : 'always',
				children       : true,
				allowMultiline : false,
				spacing        : {
					objectLiterals : 'never',
				},
			} ],
			'@stylistic/jsx-equals-spacing'      : [ 'error' ],
			'@stylistic/jsx-first-prop-new-line' : [ 'error' ],
			'@stylistic/jsx-indent'              : [ 'error',
				'tab',
				{
					checkAttributes          : true,
					indentLogicalExpressions : true,
				},
			],
			'@stylistic/jsx-indent-props'            : [ 'error', 'tab' ],
			'@stylistic/jsx-one-expression-per-line' : [ 'error', {
				allow : 'non-jsx',
			} ],
			'@stylistic/jsx-pascal-case'           : [ 'error' ],
			'@stylistic/jsx-props-no-multi-spaces' : [ 'error' ],
			'@stylistic/jsx-quotes'                : [ 'error', 'prefer-double' ],
			'@stylistic/jsx-self-closing-comp'     : [ 'error', {
				component : true,
				html      : false,
			} ],
			'@stylistic/jsx-sort-props' : [ 'error', {
				ignoreCase           : true,
				callbacksLast        : true,
				shorthandLast        : true,
				multiline            : 'last',
				noSortAlphabetically : true,
				reservedFirst        : true,
			} ],
			'@stylistic/jsx-tag-spacing' : [ 'error', {
				beforeClosing : 'never',
			} ],
			'@stylistic/jsx-wrap-multilines' : [ 'error', {
				declaration   : 'parens-new-line',
				assignment    : 'parens-new-line',
				return        : 'parens-new-line',
				arrow         : 'parens-new-line',
				condition     : 'parens-new-line',
				logical       : 'parens-new-line',
				prop          : 'parens-new-line',
				propertyValue : 'parens-new-line',
			} ],
		},
	},
] satisfies Linter.Config[];
