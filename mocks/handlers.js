import { rest } from 'msw'

export const handlers = [
    rest.get('/api/example', (req, res, ctx) =>
        res(ctx.json({ message: 'Hello from MSW' }))
    ),
    // Add more handlers here
]
