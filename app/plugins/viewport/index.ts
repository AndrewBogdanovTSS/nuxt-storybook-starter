const breakpoints = {
  "sm": 0,
  "md": 768,
  "lg": 1024
}

type Breakpoint = keyof typeof breakpoints

interface Viewport {
  sm: boolean
  md: boolean
  lg: boolean
  breakpoint: Breakpoint
}

declare module '#app' {
  interface NuxtApp {
    $viewport: Viewport
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $viewport: Viewport
  }
}

export default defineNuxtPlugin(() => {
  const viewport = breakpoints

  const current = viewport.sm

  return {
    provide: {
      viewport: reactive({
        ...viewport,
        /**
         * Accroding to specification `at` returns `string | undefined`as long as array may have zero elements
         * But in our case we know that array will always have at least one element
         * because the smallest breakpoint is `sm` === 0
         * so we can safely cast it to `string`
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at
         */
        breakpoint: current
      })
    }
  }
})
