import { createRoute, htmlRoute } from '@engine'

import { effects } from '@data/effects'

import { EffectsIndexPage } from './indexPage'
import { EffectPage } from './instancePage'

export const effectsRoute = createRoute({
  index: <EffectsIndexPage />,
  source: effects,
  selector: (e) => htmlRoute({ name: e.id, element: <EffectPage {...e} /> }),
})
