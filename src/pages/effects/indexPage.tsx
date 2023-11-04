import React from 'react'

import { type MoveEffect, effects } from '@data/effects'

export const EffectsIndexPage: React.FC = () => {
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
        <a href={`./effects/${id}.html`}>{id}</a>
      </td>
      <td>{description}</td>
    </tr>
  )
}
