import fs from 'fs'
import moves from './data/moves.mjs'
import effects from './data/effects.mjs'

import { buildIndexPage } from './builders/indexBuilder.mjs'
import { styleSheet } from './builders/style.mjs'
import { buildEffectPage, buildEffectsIndexPage } from './builders/effectPageBuilder.mjs'
import { buildMovePage, buildMovesIndexPage } from './builders/movesPageBuilder.mjs'
import { buildSpecPage } from './builders/specPageBuilder.mjs'

// --------

if (fs.existsSync('../docs/'))
  fs.rmdirSync('../docs', { recursive: true })

fs.mkdirSync('../docs/docs/effects', { recursive: true })
fs.mkdirSync('../docs/docs/moves', { recursive: true })

for (const [id, e] of Object.entries(effects)) {
  fs.writeFileSync(`../docs/docs/effects/${id}.html`, buildEffectPage(id, e))
}
fs.writeFileSync(`../docs/docs/effects.html`, buildEffectsIndexPage())

for (const m of moves) {
  if (m.name === "わるあがき") continue

  fs.writeFileSync(`../docs/docs/moves/${m.id.toString().padStart(3, '0')}.html`, buildMovePage(m))
}
fs.writeFileSync(`../docs/docs/moves.html`, buildMovesIndexPage())

fs.writeFileSync(`../docs/docs/specs.html`, buildSpecPage())

fs.writeFileSync('../docs/docs/style.css', styleSheet)

fs.writeFileSync('../docs/index.html', buildIndexPage())
