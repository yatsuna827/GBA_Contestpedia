import { effects } from '@src/data/effects'
import { createRoute2, htmlRoute } from '@src/engine/route'

import { EffectsIndexPage } from './indexPage'
import { EffectPage } from './instancePage'

export const effectsRoute = createRoute2({
  index: <EffectsIndexPage />,
  source: effects,
  selector: (e) => htmlRoute({ name: e.id, element: <EffectPage {...e} /> }),
})
