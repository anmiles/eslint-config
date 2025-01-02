import type { Linter, ESLint } from 'eslint';
import { fixupPluginRules } from '@eslint/compat';

// @ts-expect-error 7016 plugin is non-typed
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
	{
		plugins : {
			'react-hooks' : fixupPluginRules(reactHooksPlugin as ESLint.Plugin),
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

			...reactHooksPlugin.configs.recommended.rules as Linter.Config['rules'],

			'react-hooks/rules-of-hooks'  : [ 'error' ],
			'react-hooks/exhaustive-deps' : [ 'error' ],
		},
	},
] satisfies Linter.Config[];
