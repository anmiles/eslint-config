module.exports = {
	plugins : [
		'n',
	],

	extends : [
		'plugin:n/recommended',
	],

	rules : {
		'n/no-extraneous-import' : [ 'off' ],
		'n/no-missing-require'   : [ 'off' ],
		'n/no-missing-import'    : [ 'off' ],
		'n/no-path-concat'       : [ 'error' ],
		'n/no-process-exit'      : [ 'off' ],
	},
};
