import cssPlugin from '@eslint/css';
import type { Linter } from 'eslint';

const config: Linter.Config[] = [
	{
		plugins: {
			'css': cssPlugin,
		},

		files: [
			'**/*.css',
		],

		language: 'css/css',

		rules: {
			...cssPlugin.configs.recommended.rules,
			'css/no-invalid-properties': [ 'error', { allowUnknownVariables: true } ],
		},
	},
];

export default config;
