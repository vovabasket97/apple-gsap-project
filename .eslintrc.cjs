module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['standard', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:tailwindcss/recommended', 'prettier'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/first': 'off',
    'import/no-absolute-path': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-unused-vars': 'off',
    'array-callback-return': 'off'
  },
}
