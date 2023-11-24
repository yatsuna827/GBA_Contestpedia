import { moves } from '@src/data/moves'
import { createRoute, htmlRoute } from '@src/engine/route'

import { MovesIndexPage } from './indexPage'
import { MovePage } from './instancePage'

export const movesRoute = createRoute({
  index: <MovesIndexPage />,
  fileRoutes: moves.map((m) => htmlRoute({ name: m.id.toString().padStart(3, '0'), element: <MovePage {...m} /> })),
})
