import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import type { ESLint, Linter } from 'eslint';

import { patterns } from '../lib/constants.mjs';

export default [
	{
		plugins : {
			'@typescript-eslint' : typescriptEslintPlugin as unknown as ESLint.Plugin,
		},

		files : patterns.ts,

		rules : {
			...typescriptEslintPlugin.configs['strictTypeChecked']?.rules,
			...typescriptEslintPlugin.configs['stylisticTypeChecked']?.rules,

			'max-params'            : [ 'off' ],
			'no-loop-func'          : [ 'off' ],
			'no-shadow'             : [ 'off' ],
			'no-unused-expressions' : [ 'off' ],
			'no-unused-vars'        : [ 'off' ],
			'require-await'         : [ 'off' ],

			'import/no-named-as-default' : [ 'off' ],
			'import/no-unresolved'       : [ 'off' ],

			'@typescript-eslint/array-type'              : [ 'off' ],
			'@typescript-eslint/ban-ts-comment'          : [ 'error' ],
			'@typescript-eslint/consistent-type-exports' : [ 'error' ],
			'@typescript-eslint/consistent-type-imports' : [ 'error' ],
			'@typescript-eslint/dot-notation'            : [ 'error', {
				allowPrivateClassPropertyAccess   : true,
				allowProtectedClassPropertyAccess : true,
				allowIndexSignaturePropertyAccess : true,
			} ],
			'@typescript-eslint/explicit-function-return-type' : [ 'error', {
				allowExpressions                                     : true,
				allowConciseArrowFunctionExpressionsStartingWithVoid : true,
				allowIIFEs                                           : true,
			} ],
			'@typescript-eslint/explicit-module-boundary-types' : [ 'error', {
				allowArgumentsExplicitlyTypedAsAny : true,
			} ],
			'@typescript-eslint/max-params' : [ 'error', {
				max : 5,
			} ],
			'@typescript-eslint/member-ordering'   : [ 'error' ],
			'@typescript-eslint/naming-convention' : [ 'error', {
				selector : 'objectLiteralProperty',
				format   : null,
			} ],
			'@typescript-eslint/no-array-delete'              : [ 'error' ],
			'@typescript-eslint/no-confusing-void-expression' : [ 'error', {
				ignoreArrowShorthand : true,
				ignoreVoidOperator   : true,
			} ],
			'@typescript-eslint/no-floating-promises' : [ 'error', {
				ignoreVoid     : true,
				ignoreIIFE     : true,
				checkThenables : true,
			} ],
			'@typescript-eslint/no-invalid-void-type' : [ 'error', {
				allowInGenericTypeArguments : true,
			} ],
			'@typescript-eslint/no-loop-func'        : [ 'error' ],
			'@typescript-eslint/no-misused-promises' : [ 'error', {
				checksVoidReturn : false,
			} ],
			'@typescript-eslint/no-namespace' : [ 'error', {
				allowDeclarations : true,
			} ],
			'@typescript-eslint/no-non-null-assertion'                        : [ 'off' ],
			'@typescript-eslint/no-unnecessary-parameter-property-assignment' : [ 'error' ],
			'@typescript-eslint/no-unsafe-type-assertion'                     : [ 'error' ],
			'@typescript-eslint/no-unsafe-unary-minus'                        : [ 'error' ],
			'@typescript-eslint/no-unused-vars'                               : [ 'error', {
				varsIgnorePattern         : '^_',
				caughtErrorsIgnorePattern : '^_',
			} ],
			'@typescript-eslint/no-useless-empty-export'        : [ 'error' ],
			'@typescript-eslint/prefer-as-const'                : [ 'error' ],
			'@typescript-eslint/prefer-find'                    : [ 'error' ],
			'@typescript-eslint/prefer-for-of'                  : [ 'error' ],
			'@typescript-eslint/prefer-readonly'                : [ 'error' ],
			'@typescript-eslint/prefer-reduce-type-parameter'   : [ 'error' ],
			'@typescript-eslint/prefer-return-this-type'        : [ 'error' ],
			'@typescript-eslint/prefer-string-starts-ends-with' : [ 'error' ],
			'@typescript-eslint/promise-function-async'         : [ 'error' ],
			'@typescript-eslint/require-await'                  : [ 'error' ],
			'@typescript-eslint/restrict-plus-operands'         : [ 'error' ],
			'@typescript-eslint/restrict-template-expressions'  : [ 'error', {
				allowNumber : true,
			} ],
			'@typescript-eslint/sort-type-constituents' : [ 'error', {
				checkUnions        : false,
				checkIntersections : false,
				caseSensitive      : true,
			} ],
			'@typescript-eslint/switch-exhaustiveness-check' : [ 'error' ],
			'@typescript-eslint/unbound-method'              : [ 'error', {
				ignoreStatic : true,
			} ],
			'@typescript-eslint/unified-signatures' : [ 'error', {
				ignoreDifferentlyNamedParameters : true,
			} ],
		},
	},

	{
		files : [
			'**/*.tsx',
		],

		rules : {
			'@typescript-eslint/explicit-function-return-type'  : [ 'off' ],
			'@typescript-eslint/explicit-module-boundary-types' : [ 'off' ],
			'@typescript-eslint/naming-convention'              : [ 'error', {
				selector : 'objectLiteralProperty',
				format   : null,
			}, {
				selector : 'function',
				format   : [ 'camelCase', 'PascalCase' ],
			} ],
		},
	},
] satisfies Linter.Config[];
