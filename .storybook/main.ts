import type { StorybookConfig } from '@storybook-vue/nuxt';
import { resolve } from 'pathe'

const config: StorybookConfig = {
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
