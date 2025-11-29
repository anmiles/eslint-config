import cssPlugin from '@eslint/css';
import type { Linter } from 'eslint';

export default [
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
] satisfies Linter.Config[];
