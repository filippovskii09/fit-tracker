import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-function': [
        'error',
        {
          allow: [
            'constructors',
            'protected-constructors',
            'private-constructors',
            'decoratedFunctions',
            'arrowFunctions',
          ],
        },
      ],
    },
  },
];
