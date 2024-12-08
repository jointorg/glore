import config, { sortImports, withIgnores } from '@repo/eslint-config'

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default withIgnores(
  [
    ...config(),
    {
      rules: {
        'perfectionist/sort-imports': [
          2,
          sortImports({
            sortImportsOptions: {
              newlinesBetween: 'ignore',
            },
          }),
        ],
      },
    },
  ],
  ['apps', 'packages'],
)
