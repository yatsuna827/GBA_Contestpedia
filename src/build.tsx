import fs from 'fs'
import { renderToStaticMarkup } from 'react-dom/server'

import { effects } from '@data/effects'
import { Move, moves } from '@data/moves'

import { TopPage } from '@src/pages/top'
import { EffectPage, EffectsIndexPage } from '@pages/effects'
import { MovePage, MovesIndexPage } from '@pages/moves'
import { SpecPage } from '@pages/spec'

// --------

const __rootDir = `${process.cwd()}`
const __docDir = `${__rootDir}/docs`

if (fs.existsSync(__docDir)) fs.rmdirSync(__docDir, { recursive: true })

fs.mkdirSync(`${__docDir}/docs/effects`, { recursive: true })
fs.mkdirSync(`${__docDir}/docs/moves`, { recursive: true })

for (const e of effects) {
  fs.writeFileSync(`${__docDir}/docs/effects/${e.id}.html`, renderToStaticMarkup(<EffectPage {...e} />))
}
fs.writeFileSync(`${__docDir}/docs/effects.html`, renderToStaticMarkup(<EffectsIndexPage />))

for (const m of moves) {
  if (m.id === 165) continue

  fs.writeFileSync(
    `${__docDir}/docs/moves/${m.id.toString().padStart(3, '0')}.html`,
    renderToStaticMarkup(<MovePage {...(m as Move)} />)
  )
}
fs.writeFileSync(`${__docDir}/docs/moves.html`, renderToStaticMarkup(<MovesIndexPage />))
fs.writeFileSync(`${__docDir}/docs/specs.html`, renderToStaticMarkup(<SpecPage />))
fs.writeFileSync(`${__docDir}/index.html`, renderToStaticMarkup(<TopPage />))

fs.copyFileSync(`${__rootDir}/src/style.css`, `${__docDir}/docs/style.css`)

console.log('built ✨')
