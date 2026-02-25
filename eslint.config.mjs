import nextConfig from 'eslint-config-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';

const eslintConfig = [
  ...nextConfig,
  {
    plugins: { perfectionist },
    rules: {
      'perfectionist/sort-imports': 'error',
    },
  },
  eslintConfigPrettier,
  {
    ignores: ['.next/', '.cache/', 'dist/', 'node_modules/', 'public/'],
  },
];

export default eslintConfig;
