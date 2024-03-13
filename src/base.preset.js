module.exports = {
	root : true,

	parserOptions : {
		ecmaVersion : 2022,
		sourceType  : 'module',
	},

	overrides : [
		{
			files : [
				'*.js',
				'*.mjs',
				'*.cjs',
				'*.ts',
				'*.cts',
				'*.mts',
				'*.jsx',
				'*.tsx',
			],
			extends : [
				'./plugins/base.js',
				'./plugins/@stylistic.base.js',
				'./plugins/align-assignments.js',
				'./plugins/import.js',
				'./plugins/n.js',
				'./plugins/promise.js',
			],
			env : {
				es2022 : true,
				node   : true,
			},
		},
		{
			files : [
				'*.json',
			],
			extends : [
				'./plugins/jsonc.js',
			],
		},
	],

	reportUnusedDisableDirectives : true,
};
