import jsonPlugin from '@eslint/json';
import type { Linter } from 'eslint';

export default [
	{
		plugins: {
			'json': jsonPlugin,
		},

		files: [
			'**/*.json',
		],

		ignores: [
			'**/package-lock.json',
		],

		language: 'json/jsonc',

		rules: {
			...jsonPlugin.configs.recommended.rules,
		},
	},

	{
		files: [
			'**/tsconfig.json',
			'**/tsconfig.*.json',
		],

		languageOptions: {
			allowTrailingCommas: true,
		} as Linter.Config['languageOptions'],
	},
] satisfies Linter.Config[];
