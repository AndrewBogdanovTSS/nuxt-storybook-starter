import type { StorybookConfig } from '@nuxtjs/storybook'

const config: StorybookConfig = {
  staticDirs: ['./public'],
  "stories": [
    "../**/components/**/*.stories.ts"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook-vue/nuxt",
    "options": {}
  }
}
export default config
