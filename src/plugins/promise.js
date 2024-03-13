module.exports = {
	plugins : [
		'promise',
	],

	extends : [
		'plugin:promise/recommended',
	],

	rules : {
		'promise/always-return'             : [ 'error', { ignoreLastCallback : true } ],
		'promise/no-callback-in-promise'    : [ 'error' ],
		'promise/no-multiple-resolved'      : [ 'error' ],
		'promise/no-nesting'                : [ 'error' ],
		'promise/no-promise-in-callback'    : [ 'error' ],
		'promise/no-return-in-finally'      : [ 'error' ],
		'promise/prefer-await-to-callbacks' : [ 'error' ],
		'promise/prefer-await-to-then'      : [ 'error' ],
		'promise/valid-params'              : [ 'error' ],
	},
};
