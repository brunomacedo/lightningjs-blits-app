const prettier = require('eslint-plugin-prettier')
const globals = require('globals')
const js = require('@eslint/js')
const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

module.exports = [
  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'prettier'
  ),
  {
    rules: {
      'no-console': 'off',
      'no-debugger': 'off',
      quotes: [2, 'single', 'avoid-escape'],
      semi: [2, 'never'],
      'no-extra-boolean-cast': 'off',
      'no-unused-vars': [
        1,
        {
          argsIgnorePattern: 'res|next|^err',
        },
      ],
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'es5',
          singleQuote: true,
          tabWidth: 2,
          semi: false,
          printWidth: 100,
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  {
    files: ['**/*.ts'],
    plugins: {
      prettier,
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
    },
    rules: {
      'no-warning-comments': [
        'warn',
        {
          terms: ['eslint-disable-next-line', 'eslint-disable'],
          location: 'anywhere',
        },
      ],
    },
  },
  {
    files: ['**/*.js', '**/*.cjs'],
    plugins: {
      prettier,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        parser: 'babel-eslint',
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    ignores: ['node_modules'],
  },
]
