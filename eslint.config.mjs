import storybook from 'eslint-plugin-storybook'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    ...storybook.configs['flat/recommended'],
    // Handle TypeScript files in .storybook directory
    {
        files: ['.storybook/**/*.ts'],
        languageOptions: {
            parser: (await import('@typescript-eslint/parser')).default,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        }
    }
)
