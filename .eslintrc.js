module.exports = {
  extends: [
    'plugin:@angular-eslint/recommended',
    // For spec files
    'plugin:jest/recommended',
    // AirBnB Styleguide rules
    'airbnb-typescript/base',
    // Settings for Prettier
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'jest'],
  rules: {
    'import/no-unresolved': 'off',
    '@angular-eslint/component-selector': [
      'error',
      { type: 'element', prefix: 'rwo', style: 'kebab-case' },
    ],
    '@angular-eslint/directive-selector': [
      'error',
      { type: 'attribute', prefix: 'rwo', style: 'camelCase' },
    ],
    'import/extensions': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    'lines-between-class-members': 'off',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', { props: false }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.component.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.eslint.json',
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      plugins: ['@angular-eslint/template'],
      processor: '@angular-eslint/template/extract-inline-html',
    },
    {
      files: ['*.component.html'],
      parser: '@angular-eslint/template-parser',
      rules: {
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/naming-convention': 'off',
        strict: 'off',
        'import/first': 'off',
        'lines-around-directive': 'off',
      },
      plugins: ['@angular-eslint/template'],
    },
    {
      files: ['src/**/*.spec.ts', 'src/**/*.d.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.spec.json',
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      // Jest rules
      extends: ['plugin:jest/recommended'],
      // Plugin to run Jest rules
      plugins: ['jest'],
      env: {
        jest: true,
      },
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    },
    {
      files: ['mock/*.js', 'coverage/**/*'],
      parser: 'esprima',
      rules: {
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
