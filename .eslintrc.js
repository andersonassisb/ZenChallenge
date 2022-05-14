module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    es2021: true,
  },
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
          'error',
          [
            2,
            {
              extensions: ['.jsx', '.js', '.tsx', '.ts'],
            },
          ],
        ],
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'import/prefer-default-export': 'off',
        'react/state-in-constructor': 'off',
        'react/static-property-placement': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'no-param-reassign': 'off',
        'no-console': 'off',
        'global-require': 'off',
        'no-unused-expressions': ['error', {allowTaggedTemplates: true}],
      },
    },
  ],
};
