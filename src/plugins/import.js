module.exports = {
	plugins : [
		'import',
	],

	extends : [
		'plugin:import/recommended',
		'plugin:import/typescript',
	],

	rules : {
		'import/consistent-type-specifier-style' : [ 'error', 'prefer-top-level' ],
		'import/exports-last'                    : [ 'error' ],
		'import/extensions'                      : [ 'error', { js : 'never', json : 'always' } ],
		'import/first'                           : [ 'error' ],
		'import/group-exports'                   : [ 'error' ],
		'import/newline-after-import'            : [ 'error', { count : 1, considerComments : false } ],
		'import/no-absolute-path'                : [ 'error' ],
		'import/no-cycle'                        : [ 'error' ],
		'import/no-deprecated'                   : [ 'error' ],
		'import/no-mutable-exports'              : [ 'error' ],
		'import/no-named-as-default-member'      : [ 'off' ],
		'import/no-useless-path-segments'        : [ 'error' ],
		'import/order'                           : [ 'error', { groups : [ 'builtin', 'external', 'unknown', 'internal', 'parent', 'sibling', 'index' ] } ],
	},

	overrides : [
		{
			files : [
				'*.ts',
				'*.cts',
				'*.mts',
				'*.tsx',
			],

			settings : {
				'import/parsers' : {
					'@typescript-eslint/parser' : [ '.ts', '.tsx' ],
				},
				'import/resolver' : {
					typescript : true,
					node       : true,
				},
			},
		},
	],
};
