module.exports = {
  '*.{ts,tsx}': ["eslint --ignore-pattern '!*' --fix --max-warnings=0"],
  '*.{html,md,json,yml}': ['prettier --write'],
  '*.svg': ['prettier --write --parser html'],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  // './src/**/styles.{ts,tsx}': 'stylelint --config .stylelintrc.js',
};
