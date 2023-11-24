import { createRoute, htmlRoute } from '@engine/route'
import { moves } from '@data/moves'

import { MovesIndexPage } from './indexPage'
import { MovePage } from './instancePage'

export const movesRoute = createRoute({
  index: <MovesIndexPage />,
  source: moves,
  selector: (m) => htmlRoute({ name: m.id.toString().padStart(3, '0'), element: <MovePage {...m} /> }),
})
