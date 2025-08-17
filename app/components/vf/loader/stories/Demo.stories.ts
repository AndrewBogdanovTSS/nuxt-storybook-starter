import type { Meta } from '@nuxtjs/storybook'
import VfLoader from '../Loader.vue'

export default {
  title: 'Components/Loader',
  component: VfLoader
} as Meta

export const Demo = {
  render: () => ({
    components: {
      VfLoader
    },
    template: `
      <vf-loader width="100" height="100" />
    `
  })
}
