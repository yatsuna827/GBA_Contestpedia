import { createRoute2, htmlRoute } from '@engine/route'

import { effects } from '@data/effects'

import { EffectsIndexPage } from './indexPage'
import { EffectPage } from './instancePage'

export const effectsRoute = createRoute2({
  index: <EffectsIndexPage />,
  source: effects,
  selector: (e) => htmlRoute({ name: e.id, element: <EffectPage {...e} /> }),
})
