import type { Linter } from 'eslint';
import markdownPlugin from '@eslint/markdown';

declare module '@eslint/core' {
	export type SyntaxElement = unknown;
}

export default [
	{
		plugins : {
			'markdown' : markdownPlugin,
		},

		files : [
			'**/*.md',
		],

		language : 'markdown/commonmark',

		rules : {
			...(markdownPlugin.configs?.['recommended'] as Linter.Config).rules,
		},
	},
] satisfies Linter.Config[];
