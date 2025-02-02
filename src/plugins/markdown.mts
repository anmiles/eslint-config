import markdownPlugin from '@eslint/markdown';
import type { Linter } from 'eslint';

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
			...(markdownPlugin.configs?.['recommended'] as Linter.Config[])?.[0]?.rules, // eslint-disable-line @typescript-eslint/dot-notation
		},
	},
] satisfies Linter.Config[];
