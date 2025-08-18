// @ts-check
import simpleImportSort from 'eslint-plugin-simple-import-sort'

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  plugins: { 'simple-import-sort': simpleImportSort },
  rules: {
    // 'import/no-cycle': 'warn',
    'vue/require-default-prop': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // style less,scss,css
          ['^.+\\.less$', '^.+\\.s?css$'],
          // Side effect imports.
          ['^\\u0000'],
          ['^@?\\w.*\\u0000$', '^[^.].*\\u0000$', '^\\..*\\u0000$'],
          ['^@?\\w', '^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
  },
})
