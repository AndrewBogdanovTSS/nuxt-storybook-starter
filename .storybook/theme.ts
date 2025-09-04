import { create } from 'storybook/theming'
import { capitalize } from 'vue'

const brand = process.env.BRAND as string
const brandName = capitalize(brand)
const brandImage = brand === 'timberland'
  ? `/img/logos/${brand}/full.svg`
  : `/img/logos/${brand}/default.svg`

export default create({
  base: 'light',
  brandTitle: `${brandName} Design System`,
  brandImage,
})
