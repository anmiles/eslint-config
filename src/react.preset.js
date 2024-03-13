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
				'./plugins/@stylistic.jsx.js',
				'./plugins/react.js',
				'./plugins/react-hooks.js',
				'./plugins/react-redux.js',
				'./plugins/react-refresh.js',
			],
			parserOptions : {
				ecmaFeatures : {
					jsx : true,
				},
			},
			env : {
				es2022  : true,
				browser : true,
			},
		},
	],

	reportUnusedDisableDirectives : true,
};
