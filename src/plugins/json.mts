import type { Linter } from 'eslint';
import jsonPlugin from '@eslint/json';

export default [
	{
		plugins : {
			'json' : jsonPlugin,
		},

		files : [
			'**/*.json',
		],

		ignores : [
			'**/package-lock.json',
		],

		language : 'json/jsonc',

		rules : {
			...jsonPlugin.configs.recommended.rules,

			'no-irregular-whitespace' : 'off',
		},
	},

	{
		files : [
			'**/tsconfig.json',
			'**/tsconfig.*.json',
		],

		languageOptions : {
			allowTrailingCommas : true,
		} as Linter.Config['languageOptions'],
	},
] satisfies Linter.Config[];
