import type { Preview } from '@storybook/vue3'
import { http, HttpResponse } from 'msw'
import { initialize, mswLoader } from 'msw-storybook-addon'

initialize({
  onUnhandledRequest: 'bypass',
})


const mockedCharacter = {
  id: 'WSXCUJM1111',
  name: 'Mocked Character',
  description: 'Mocked Description',
  thumbnail: {
    path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/30/537ba56d7bf0f',
    extension: 'jpg'
  }
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers: {
        characters: http.get('*/random/character', () =>
          HttpResponse.json(mockedCharacter))
      }
    }

  },
}

export const loaders = [mswLoader]
export default preview
