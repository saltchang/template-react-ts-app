module.exports = {
  '**/*.+(js|ts|jsx|tsx)': ['npm run lint-fix', 'npm run format'],
  '*.+(json|css|scss|html|md|yml)': ['npm run format'],
};
