module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:sonarjs/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['unused-imports', '@typescript-eslint'],
  ignorePatterns: ['/*.*'],
  rules: {
    'no-console': ['error', {allow: ['warn', 'error']}],
    '@typescript-eslint/no-var-requires': 'off',
    'no-nested-ternary': 'off',
    'no-duplicate-string': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/no-unstable-nested-components': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'import/no-extraneous-dependencies': 'off',
    // This would ignore property reassign for the redux slice
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    // ---     ends here ---
    // This allows the strict use of arrow functions
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'react/display-name': 'off',
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        '': 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'], // Target only JavaScript files
      rules: {
        '@typescript-eslint/no-var-requires': 'off', // Turn off the rule
      },
    },
  ],
};
