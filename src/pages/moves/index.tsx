import { Move, moves } from '@src/data/moves'
import { createRoute } from '@src/engine/route/dirRoute'
import { htmlRoute } from '@src/engine/route/fileRoute'

import { MovesIndexPage } from './indexPage'
import { MovePage } from './instancePage'

export const movesRoute = createRoute({
  index: <MovesIndexPage />,
  fileRoutes: moves
    .filter((x): x is Move => !!x.effectId)
    .map((m) => htmlRoute({ name: m.id.toString().padStart(3, '0'), element: <MovePage {...m} /> })),
})
