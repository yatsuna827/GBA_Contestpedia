import fs from 'fs'
import {Move, moves} from './data/moves.js'
import {effects} from './data/effects.js'

import { buildIndexPage } from './builders/indexBuilder.js'
import { styleSheet } from './builders/style.js'
import { buildEffectPage, buildEffectsIndexPage } from './builders/effectPageBuilder.js'
import { buildMovePage, buildMovesIndexPage } from './builders/movesPageBuilder.js'
import { buildSpecPage } from './builders/specPageBuilder.js'

// --------

const __rootDir = `${process.cwd()}`;
const __docDir = `${__rootDir}/docs`

if (fs.existsSync(__docDir))
  fs.rmdirSync(__docDir, { recursive: true })

fs.mkdirSync(`${__docDir}/docs/effects`, { recursive: true })
fs.mkdirSync(`${__docDir}/docs/moves`, { recursive: true })

for (const e of effects) {
  fs.writeFileSync(`${__docDir}/docs/effects/${e.id}.html`, buildEffectPage(e))
}
fs.writeFileSync(`${__docDir}/docs/effects.html`, buildEffectsIndexPage())

for (const m of moves) {
  if (m.id === 165) continue

  fs.writeFileSync(`${__docDir}/docs/moves/${m.id.toString().padStart(3, '0')}.html`, buildMovePage(m as Move))
}
fs.writeFileSync(`${__docDir}/docs/moves.html`, buildMovesIndexPage())

fs.writeFileSync(`${__docDir}/docs/specs.html`, buildSpecPage())

fs.writeFileSync(`${__docDir}/docs/style.css`, styleSheet)

fs.writeFileSync(`${__docDir}/index.html`, buildIndexPage())

console.log('built ✨')
