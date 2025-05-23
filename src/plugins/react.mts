import type { Linter } from 'eslint';
import reactPlugin from 'eslint-plugin-react';

import { extensions, patterns } from '../lib/constants.mjs';

export default [
	{
		plugins: {
			'react': reactPlugin,
		},

		files: patterns.react,

		settings: {
			react: {
				version: 'detect',
			},
		},

		rules: {
			...reactPlugin.configs.flat?.['recommended']?.rules,
			...reactPlugin.configs.flat?.['jsx-runtime']?.rules,

			'react/boolean-prop-naming': [ 'error', {
				validateNested: true,
			} ],
			'react/destructuring-assignment': [ 'error', 'always', {
				ignoreClassFields     : true,
				destructureInSignature: 'always',
			} ],
			'react/forbid-component-props'       : [ 'error' ],
			'react/forbid-foreign-prop-types'    : [ 'error' ],
			'react/function-component-definition': [ 'error' ],
			'react/hook-use-state'               : [ 'error' ],
			'react/iframe-missing-sandbox'       : [ 'error' ],
			'react/jsx-filename-extension'       : [ 'error', {
				extensions: extensions.react,
			} ],
			'react/jsx-fragments'                       : [ 'error', 'syntax' ],
			'react/jsx-no-constructed-context-values'   : [ 'error' ],
			'react/jsx-no-leaked-render'                : [ 'error' ],
			'react/jsx-no-script-url'                   : [ 'error' ],
			'react/jsx-no-useless-fragment'             : [ 'error' ],
			'react/jsx-props-no-spread-multi'           : [ 'error' ],
			'react/no-access-state-in-setstate'         : [ 'error' ],
			'react/no-array-index-key'                  : [ 'error' ],
			'react/no-arrow-function-lifecycle'         : [ 'error' ],
			'react/no-danger'                           : [ 'error' ],
			'react/no-did-mount-set-state'              : [ 'error' ],
			'react/no-did-update-set-state'             : [ 'error' ],
			'react/no-invalid-html-attribute'           : [ 'error' ],
			'react/no-namespace'                        : [ 'error' ],
			'react/no-object-type-as-default-prop'      : [ 'error' ],
			'react/no-redundant-should-component-update': [ 'error' ],
			'react/no-this-in-sfc'                      : [ 'error' ],
			'react/no-typos'                            : [ 'error' ],
			'react/no-unstable-nested-components'       : [ 'error' ],
			'react/no-unused-class-component-methods'   : [ 'error' ],
			'react/no-unused-state'                     : [ 'error' ],
			'react/no-will-update-set-state'            : [ 'error' ],
			'react/prefer-es6-class'                    : [ 'error' ],
			'react/prefer-read-only-props'              : [ 'error' ],
			'react/prefer-stateless-function'           : [ 'error' ],
			'react/prop-types'                          : [ 'off' ],
			'react/sort-comp'                           : [ 'error', {
				order: [
					'instance-variables',
					'static-methods',
					'lifecycle',
					'everything-else',
					'render',
				],
			} ],
			'react/state-in-constructor'         : [ 'error' ],
			'react/static-property-placement'    : [ 'error', 'static public field' ],
			'react/style-prop-object'            : [ 'error' ],
			'react/void-dom-elements-no-children': [ 'error' ],
		},
	},

	{
		files: [
			'**/vite.config.*ts',
		],

		rules: {
			'n/no-unpublished-import': [ 'off' ],
		},
	},
] satisfies Linter.Config[];
