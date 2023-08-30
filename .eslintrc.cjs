module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'import'],
  rules: {
    /*
     * "import/order" sorts the order of import declarations, ie:
     *
     * import b from "b";
     * import { z, a } from "x";
     */
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          ['external', 'builtin'],
          ['internal'],
          ['index', 'sibling', 'parent'],
        ],
        'newlines-between': 'always',
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    /*
     * Then, "sort-imports" complements "import/order" by sorting named imports,
     * like so:
     *
     * import b from "b";
     * import { a, z } from "x";
     */
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        /*
         * This option turns off declaration sorting, as this is already handled
         * by "import/order".
         */
        ignoreDeclarationSort: true,
      },
    ],
  },
};
