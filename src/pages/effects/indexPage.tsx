import React from 'react'

import { type MoveEffect, effects } from '@data/effects'
import { EffectPage } from '@src/pages/effects'
import { InnerLink } from '@src/engine/link'
import { createRoute2, htmlRoute } from '@src/engine/route'

const EffectsIndexPage: React.FC = () => {
  return (
    <html>
      <head>
        <title>GBAコンテスト辞典|わざ効果データ</title>
        <link rel="stylesheet" href="./style.css" />
      </head>

      <body>
        <h1>わざ効果データ</h1>

        <EffectsTable effects={effects} />
      </body>
    </html>
  )
}

const EffectsTable: React.FC<{ effects: readonly MoveEffect[] }> = ({ effects }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>効果</th>
        </tr>
      </thead>
      <tbody>
        {effects.map((e) => (
          <Row key={e.id} {...e} />
        ))}
      </tbody>
    </table>
  )
}

const Row: React.FC<MoveEffect> = ({ id, description }) => {
  return (
    <tr>
      <td>
        <InnerLink to={effectsRoute.get(id)}>{id}</InnerLink>
      </td>
      <td>{description}</td>
    </tr>
  )
}

export const effectsRoute = createRoute2({
  index: <EffectsIndexPage />,
  source: effects,
  selector: (e) => htmlRoute({ name: e.id, element: <EffectPage {...e} /> }),
})
