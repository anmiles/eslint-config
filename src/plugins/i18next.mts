import type { Linter } from 'eslint';
import i18NextPlugin from 'eslint-plugin-i18next';

import { patterns } from '../lib/constants.mjs';

const config: Linter.Config[] = [
	{
		plugins: {
			'i18next': i18NextPlugin,
		},

		files: patterns.base,

		rules: {
			...i18NextPlugin.configs['flat/recommended'].rules,

			'i18next/no-literal-string': [ 'error', {
				framework                 : 'react',
				'should-validate-template': true,
			} ],
		},
	},
];

export default config;
