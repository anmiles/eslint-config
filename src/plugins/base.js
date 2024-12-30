module.exports = {
	extends : [
		'eslint:recommended',
	],

	rules : {
		'arrow-body-style'        : [ 'error' ],
		'camelcase'               : [ 'error' ],
		'complexity'              : [ 'error' ],
		'curly'                   : [ 'error' ],
		'func-style'              : [ 'error', 'declaration', { allowArrowFunctions : true } ],
		'max-params'              : [ 'error', { max : 5 } ],
		'no-eval'                 : [ 'error' ],
		'no-extra-bind'           : [ 'error' ],
		'no-implied-eval'         : [ 'error' ],
		'no-loop-func'            : [ 'error' ],
		'no-useless-rename'       : [ 'error' ],
		'no-unused-vars'          : [ 'error', { varsIgnorePattern : '^_', caughtErrorsIgnorePattern : '^_' } ],
		'no-var'                  : [ 'error' ],
		'object-shorthand'        : [ 'error' ],
		'prefer-const'            : [ 'error' ],
		'prefer-numeric-literals' : [ 'error' ],
		'prefer-template'         : [ 'error' ],
		'yoda'                    : [ 'error' ],
	},
};
