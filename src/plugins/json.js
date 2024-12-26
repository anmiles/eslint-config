// TODO: add everything for markdown plugin

// TODO: change everything for using of the new native plugin
module.exports = {
	plugins : [
		'jsonc',
	],

	extends : [
		'plugin:jsonc/recommended-with-json',
	],

	ignorePatterns : [
		'**/package-lock.json',
	],

	rules : {
		'no-irregular-whitespace' : [ 'off' ],

		'jsonc/no-bigint-literals'      : [ 'error' ],
		'jsonc/array-bracket-newline'   : [ 'error', 'consistent' ],
		'jsonc/array-bracket-spacing'   : [ 'error', 'always' ],
		'jsonc/array-element-newline'   : [ 'error', 'consistent' ],
		'jsonc/comma-style'             : [ 'error' ],
		'jsonc/indent'                  : [ 'error', 'tab', { SwitchCase : 1 } ],
		'jsonc/key-spacing'             : [ 'error', { beforeColon : true, afterColon : true, mode : 'strict' } ],
		'jsonc/no-irregular-whitespace' : [ 'error' ],
		'jsonc/no-octal-escape'         : [ 'error' ],
		'jsonc/object-curly-newline'    : [ 'error' ],
		'jsonc/object-curly-spacing'    : [ 'error', 'always' ],
		'jsonc/object-property-newline' : [ 'error', { allowMultiplePropertiesPerLine : true } ],
	},

	overrides : [
		{
			files : [
				'**/package.json',
			],
			rules : {
				// package.json is always rewritten with `npm install` in a manner consistent with the rules below
				'jsonc/key-spacing' : [ 'error', { beforeColon : false, afterColon : true, mode : 'strict' } ],
			},
		},
		{
			files : [
				'**/tsconfig.json',
				'**/tsconfig.*.json',
			],
			rules : {
				'jsonc/comma-dangle' : [ 'off' ],
			},
		},
	],
};
