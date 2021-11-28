module.exports = {
  '**/*.+(js|ts|jsx|tsx)': [
    'yarn eslint --fix "src/**/*.{js,ts,jsx,tsx}"',
    'yarn format',
  ],
  '*.+(json|css|scss|html|md|yml)': ['yarn format'],
};
