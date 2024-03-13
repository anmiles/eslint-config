module.exports = {
	root : true,

	parserOptions : {
		ecmaVersion : 2022,
		sourceType  : 'module',
	},

	overrides : [
		{
			files : [
				'*.test.js',
				'*.test.mjs',
				'*.test.cjs',
				'*.test.ts',
				'*.test.cts',
				'*.test.mts',
				'*.test.jsx',
				'*.test.tsx',
			],
			extends : [
				'./plugins/jest.js',
			],
			env : {
				es2022 : true,
				jest   : true,
			},
		},
	],

	reportUnusedDisableDirectives : true,
};
