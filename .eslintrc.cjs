module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: ['react-app', 'eslint:recommended', 'plugin:react-hooks/recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:jsx-a11y/recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    'eslint-plugin-react',
    'jsx-a11y',
    'unused-imports',
    'import'
  ],
  settings: {
    "import/resolver": {
        typescript: {}
    }
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.

      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
      rules: {
        // 'plugin:@typescript-eslint/recommended' brings this rule again
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
      },
    },
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    semi: [2, 'never'],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/display-name': 1,
    'react/forbid-prop-types': 0,
    'react/function-component-definition': [
        2, 
        { namedComponents: 'arrow-function' },
     ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 1,
    'react/jsx-boolean-value': 1,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-curly-spacing': 1,
    'react/jsx-indent-props': ['error', 4],
    'react/jsx-indent': ['error', 4],
    'react/jsx-key': 1,
    'react/jsx-no-bind': 0,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 1,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 1,
    'react/no-is-mounted': 1,
    'react/no-multi-comp': 0,
    'react/no-string-refs': 0,
    'react/no-unknown-property': 1,
    'react/prefer-es6-class': 1,
    'react/self-closing-comp': 1,
    'react/no-array-index-key': 'off',
    'react/no-find-dom-node': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 1,
        when: 'always',
      },
    ],
    'id-length': 0,
    indent: ['error', 4, {
      ignoredNodes: ['JSXElement'],
      SwitchCase: 1,
    }],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'comma-dangle': [2, 'always-multiline'],
    'no-cond-assign': 2,
    'no-console': 1,
    'no-constant-condition': 1,
    'no-control-regex': 1,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 1,
    'no-empty': 1,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 1,
    'no-extra-parens': 0,
    'no-extra-semi': 1,
    'no-func-assign': 2,
    'no-inner-declarations': 1,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 1,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-reserved-keys': 0,
    'no-restricted-syntax': [
      'error',
      "CallExpression[callee.name='trace']",
    ],
    'no-restricted-imports': [
      'error',
      {
        name: 'path',
        message: 'Use `path-browserify` instead',
      },
    ],
    'no-sparse-arrays': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-jsdoc': [0, {
      requireParamDescription: false,
      requireReturnDescription: false,
      requireReturn: false,
    }],
    'valid-typeof': 2,
    'no-unexpected-multiline': 2,
    'block-scoped-var': 2,
    complexity: 0,
    'consistent-return': 0,
    curly: 1,
    'default-case': 0,
    'dot-notation': 1,
    eqeqeq: 0,
    'guard-for-in': 2,
    'padded-blocks': ['error', 'never'],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [['builtin', 'external'], ['internal', 'index', 'parent', 'sibling'], 'unknown'],
        pathGroups: [
          {
            pattern: '(utils|global|packages|providers|services|types)/**/*',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '*.css',
            patternOptions: { matchBase: true },
            group: 'unknown',
            position: 'after',
          },
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'no-alert': 1,
    'no-caller': 2,
    'no-div-regex': 1,
    'no-else-return': 1,
    'no-eq-null': 1,
    'no-eval': 1,
    'no-extend-native': 2,
    'no-extra-bind': 1,
    'no-fallthrough': 1,
    'no-floating-decimal': 1,
    'no-implied-eval': 1,
    'no-iterator': 1,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': [1, {
      exceptions: {},
    }],
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 1,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 1,
    'no-process-env': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    // for some reason it does not work in overrides
    'no-unused-expressions': 0,
    // 'no-unused-expressions': 1,
    'no-void': 2,
    'no-warning-comments': 0,
    'no-with': 2,
    radix: 0,
    'vars-on-top': 0,
    'wrap-iife': 2,
    yoda: 0,
    strict: 0,
    'no-catch-shadow': 1,
    'no-delete-var': 1,
    'no-label-var': 1,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-undef-init': 0,
    'no-undefined': 0,
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'unused-imports/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'no-use-before-define': 0,
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],
    'array-bracket-spacing': 0,
    'brace-style': 1,
    camelcase: ['error', {
      allow: ['^UNSAFE_'],
      properties: 'always',
    }],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: false,
        ignoreProperties: false,
      },
    ],
    'comma-spacing': 1,
    'comma-style': [2, 'last'],
    'consistent-this': 0,
    'eol-last': 2,
    'func-names': 0,
    'func-style': 0,
    'key-spacing': [1, {
      beforeColon: false,
      afterColon: true,
    }],
    'max-nested-callbacks': [2, 3],
    'new-cap': 2,
    'new-parens': 0,
    'newline-after-var': 0,
    'newline-before-return': 2,
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always', prev: '*', next: 'if',
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      },
    ],
    'multiline-ternary': ['error', 'always'],
    'operator-linebreak': [
      'error',
      'before',
      {
        overrides:
          {
            '=': 'after',
          },
      },
    ],
    'no-array-constructor': 2,
    'no-continue': 0,
    'no-inline-comments': 0,
    'no-lonely-if': 1,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, {
      max: 1,
    }],
    'no-nested-ternary': 2,
    'no-new-object': 1,
    'no-spaced-func': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 1,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
    'object-curly-spacing': [1, 'always'],
    'one-var': 0,
    'operator-assignment': [0, 'always'],
    quotes: [2, 'single', 'avoid-escape'],
    'quote-props': [1, 'as-needed'],
    'sort-vars': 0,
    'keyword-spacing': 2,
    'space-before-blocks': [2, 'always'],
    'space-in-brackets': 0,
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 1,
    'space-unary-ops': [2, {
      words: true,
      nonwords: false,
    }],
    'spaced-comment': [2, 'always', {
      exceptions: ['/', '-', '+'],
    }],
    'wrap-regex': 0,
    'constructor-super': 2,
    'generator-star-spacing': [2, {
      before: false,
      after: true,
    }],
    'no-this-before-super': 2,
    'no-var': 0,
    'object-shorthand': 0,
    'prefer-const': 2,
    'import/no-anonymous-default-export': ["error", {
      "allowArray": false,
      "allowArrowFunction": true,
      "allowAnonymousClass": false,
      "allowAnonymousFunction": false,
      "allowCallExpression": true, // The true value here is for backward compatibility
      "allowNew": false,
      "allowLiteral": false,
      "allowObject": true,
    }],

    'max-depth': [2, 3],
    'max-len': [2, 120, 2],
    'max-params': 0,
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/no-autofocus': 'off',

    // NOTE: Import
    'import/extensions': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
}
