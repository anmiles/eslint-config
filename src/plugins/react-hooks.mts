import { fixupPluginRules } from '@eslint/compat';
import type { ESLint, Linter } from 'eslint';
// @ts-expect-error 7016 plugin is non-typed
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import { patterns } from '../lib/constants.mjs';

export default [
	{
		plugins : {
			'react-hooks' : fixupPluginRules(reactHooksPlugin as ESLint.Plugin),
		},

		files : patterns.react,

		rules : {
			...reactHooksPlugin.configs.recommended.rules as Linter.Config['rules'],

			'react-hooks/rules-of-hooks'  : [ 'error' ],
			'react-hooks/exhaustive-deps' : [ 'error' ],
		},
	},
] satisfies Linter.Config[];
