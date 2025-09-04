import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

const theme = create({
  base: 'dark',
  brandTitle: `Design System`,
  brandImage: '/img/logo.svg' ,
})

addons.setConfig({theme})
