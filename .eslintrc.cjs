module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-extra-parens": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/props-types": "off",
    "react-react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "arrowParens": 'never',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'never',
      },
    ],
  },
}
