module.exports = {
	plugins : [
		'jest',
	],

	extends : [
		'plugin:jest/recommended',
	],

	rules : {
		'n/no-unpublished-import'           : [ 'off' ],
		'@typescript-eslint/unbound-method' : [ 'off' ], // access method to check whether it have been called

		'jest/no-standalone-expect' : [ 'error' ],
		'jest/valid-title'          : [ 'error', { ignoreTypeOfDescribeName : true } ],
	},
};
