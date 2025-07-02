import type { Preview } from '@storybook-vue/nuxt'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { handlers } from './msw/handlers'

// Initialize MSW
initialize()

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers, // Provide the handlers
    },
  },
  decorators: [mswDecorator], // Add the mswDecorator globally
}

export default preview
