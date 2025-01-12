import { fixupPluginRules } from '@eslint/compat';
import type { ESLint, Linter } from 'eslint';
// @ts-expect-error 7016 plugin is non-typed
import reactReduxPlugin from 'eslint-plugin-react-redux';

export default [
	{
		plugins : {
			'react-redux' : fixupPluginRules(reactReduxPlugin as ESLint.Plugin),
		},

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
			...reactReduxPlugin.configs.recommended.rules as Linter.Config['rules'],
		},
	},
] satisfies Linter.Config[];
