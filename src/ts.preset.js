module.exports = {
	root : true,

	parserOptions : {
		ecmaVersion : 2022,
		sourceType  : 'module',
	},

	overrides : [
		{
			files : [
				'*.ts',
				'*.cts',
				'*.mts',
				'*.tsx',
			],
			extends : [
				'./plugins/@stylistic.ts.js',
				'./plugins/@typescript-eslint.js',
			],
			parserOptions : {
				project : true,
			},
			env : {
				es2022 : true,
				node   : true,
			},
		},
	],

	reportUnusedDisableDirectives : true,
};
