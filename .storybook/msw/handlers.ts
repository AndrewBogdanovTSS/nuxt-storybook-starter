import { http, HttpResponse } from 'msw'

export const handlers = {
    productsDetails: http.get('*/products/1', () =>
      HttpResponse.json({name: 'Product 1 MSW'}))
}
