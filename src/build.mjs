import fs from 'fs'
import moves from './data/moves.mjs'
import effects from './data/effects.mjs'

import { buildIndexPage } from './builders/indexBuilder.mjs'
import { styleSheet } from './builders/style.mjs'
import { buildEffectPage, buildEffectsIndexPage } from './builders/effectPageBuilder.mjs'
import { buildMovePage, buildMovesIndexPage } from './builders/movesPageBuilder.mjs'
import { buildSpecPage } from './builders/specPageBuilder.mjs'

// --------

if (fs.existsSync('../build/'))
  fs.rmdirSync('../build', { recursive: true })

fs.mkdirSync('../build/docs/effects', { recursive: true })
fs.mkdirSync('../build/docs/moves', { recursive: true })

for (const [id, e] of Object.entries(effects)) {
  fs.writeFileSync(`../build/docs/effects/${id}.html`, buildEffectPage(id, e))
}
fs.writeFileSync(`../build/docs/effects.html`, buildEffectsIndexPage())

for (const m of moves) {
  if (m.name === "わるあがき") continue

  fs.writeFileSync(`../build/docs/moves/${m.id.toString().padStart(3, '0')}.html`, buildMovePage(m))
}
fs.writeFileSync(`../build/docs/moves.html`, buildMovesIndexPage())

fs.writeFileSync(`../build/docs/specs.html`, buildSpecPage())

fs.writeFileSync('../build/docs/style.css', styleSheet)

fs.writeFileSync('../build/index.html', buildIndexPage())
