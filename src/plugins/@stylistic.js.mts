import stylisticEslintPlugin from '@stylistic/eslint-plugin';
import type { ESLint, Linter } from 'eslint';

import { patterns } from '../lib/constants.mjs';

const config: Linter.Config[] = [
	{
		plugins: {
			'@stylistic': stylisticEslintPlugin as ESLint.Plugin,
		},

		files: patterns.base,

		rules: {
			'@stylistic/array-bracket-spacing': [ 'error', 'always' ],
			'@stylistic/arrow-parens'         : [ 'error' ],
			'@stylistic/arrow-spacing'        : [ 'error' ],
			'@stylistic/block-spacing'        : [ 'error' ],
			'@stylistic/brace-style'          : [ 'error', '1tbs', {
				allowSingleLine: true,
			} ],
			'@stylistic/comma-dangle'             : [ 'error', 'always-multiline' ],
			'@stylistic/comma-spacing'            : [ 'error' ],
			'@stylistic/comma-style'              : [ 'error' ],
			'@stylistic/computed-property-spacing': [ 'error', 'never' ],
			'@stylistic/dot-location'             : [ 'error', 'property' ],
			'@stylistic/eol-last'                 : [ 'error' ],
			'@stylistic/function-call-spacing'    : [ 'error' ],
			'@stylistic/generator-star-spacing'   : [ 'error', 'after' ],
			'@stylistic/indent'                   : [ 'error', 'tab', {
				SwitchCase              : 1,
				offsetTernaryExpressions: true,
			} ],
			'@stylistic/key-spacing': [ 'error', {
				beforeColon : false,
				afterColon  : true,
				align       : 'colon',
				ignoredNodes: [
					'TSInterfaceBody',
					'TSTypeLiteral',
					'ClassBody',
				],
			} ],
			'@stylistic/keyword-spacing'     : [ 'error' ],
			'@stylistic/linebreak-style'     : [ 'error', 'unix' ],
			'@stylistic/lines-around-comment': [ 'error', {
				beforeBlockComment: true,
			} ],
			'@stylistic/lines-between-class-members': [ 'error', {
				enforce: [
					{ blankLine: 'always', prev: '*', next: '*' },
					{ blankLine: 'never', prev: 'field', next: 'field' },
				],
			} ],
			'@stylistic/max-len': [ 'error', {
				code                  : 164,
				tabWidth              : 4,
				ignoreComments        : true,
				ignoreRegExpLiterals  : true,
				ignoreTemplateLiterals: true,
				ignoreUrls            : true,
			} ],
			'@stylistic/multiline-ternary': [ 'error', 'always-multiline' ],
			'@stylistic/new-parens'       : [ 'error' ],
			'@stylistic/no-extra-parens'  : [ 'error', 'all', {
				ignoreJSX   : 'multi-line',
				ignoredNodes: [
					'ArrowFunctionExpression[body.type=ConditionalExpression]',
				],
				nestedConditionalExpressions: false,
			} ],
			'@stylistic/no-extra-semi'           : [ 'error' ],
			'@stylistic/no-floating-decimal'     : [ 'error' ],
			'@stylistic/no-mixed-spaces-and-tabs': [ 'error', 'smart-tabs' ],
			'@stylistic/no-multiple-empty-lines' : [ 'error', {
				max   : 1,
				maxEOF: 1,
				maxBOF: 0,
			} ],
			'@stylistic/no-trailing-spaces'              : [ 'error' ],
			'@stylistic/no-whitespace-before-property'   : [ 'error' ],
			'@stylistic/nonblock-statement-body-position': [ 'error' ],
			'@stylistic/object-curly-spacing'            : [ 'error', 'always', {
				emptyObjects: 'never',
			} ],
			'@stylistic/object-property-newline': [ 'error', {
				allowAllPropertiesOnSameLine: true,
			} ],
			'@stylistic/operator-linebreak': [ 'error', 'before', {
				'overrides': {
					'='  : 'ignore',
					'+=' : 'ignore',
					'-=' : 'ignore',
					'*=' : 'ignore',
					'/=' : 'ignore',
					'%=' : 'ignore',
					'**=': 'ignore',
					'&=' : 'ignore',
					'|=' : 'ignore',
					'^=' : 'ignore',
					'<<=': 'ignore',
					'>>=': 'ignore',
					'&&=': 'ignore',
					'||=': 'ignore',
					'??=': 'ignore',
				},
			} ],
			'@stylistic/quotes': [ 'error', 'single', {
				avoidEscape          : true,
				allowTemplateLiterals: 'avoidEscape',
			} ],
			'@stylistic/semi'                       : [ 'error' ],
			'@stylistic/semi-spacing'               : [ 'error' ],
			'@stylistic/space-before-blocks'        : [ 'error' ],
			'@stylistic/space-before-function-paren': [ 'error', {
				anonymous : 'never',
				named     : 'never',
				asyncArrow: 'always',
			} ],
			'@stylistic/space-in-parens'       : [ 'error' ],
			'@stylistic/space-infix-ops'       : [ 'error' ],
			'@stylistic/space-unary-ops'       : [ 'error' ],
			'@stylistic/spaced-comment'        : [ 'error' ],
			'@stylistic/switch-colon-spacing'  : [ 'error' ],
			'@stylistic/template-curly-spacing': [ 'error' ],
			'@stylistic/type-generic-spacing'  : [ 'error' ],
			'@stylistic/yield-star-spacing'    : [ 'error', 'after' ],
		},
	},
];

export default config;
