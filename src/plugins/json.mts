import jsonPlugin from '@eslint/json';
import type { Linter } from 'eslint';

type Plugin = Linter.Config['plugins'] extends Record<string, infer Plugin> ? Plugin : never;

const config: Linter.Config[] = [
	{
		plugins: {
			'json': jsonPlugin as Plugin,
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
];

export default config;
