import { fixupPluginRules } from '@eslint/compat';
import type { ESLint, Linter } from 'eslint';
// @ts-expect-error 7016 plugin is non-typed
import reactReduxPlugin from 'eslint-plugin-react-redux';

import { patterns } from '../lib/constants.mjs';

const config: Linter.Config[] = [
	{
		plugins: {
			'react-redux': fixupPluginRules(reactReduxPlugin as ESLint.Plugin),
		},

		files: patterns.react,

		rules: {
			...reactReduxPlugin.configs.recommended.rules as Linter.Config['rules'],
		},
	},
];

export default config;
