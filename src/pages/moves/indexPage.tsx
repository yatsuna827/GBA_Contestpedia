import React from 'react'

import { AppealType, toEn } from '@data/appealType'
import { type Move, moves } from '@data/moves'

export const MovesIndexPage: React.FC = () => {
  return (
    <html>
      <head>
        <title>GBAコンテスト辞典|わざデータ</title>
        <link rel="stylesheet" href="./style.css" />
      </head>

      <body>
        <h1>わざデータ</h1>
        <TypeSection appealType="かっこよさ" />
        <TypeSection appealType="うつくしさ" />
        <TypeSection appealType="かわいさ" />
        <TypeSection appealType="かしこさ" />
        <TypeSection appealType="たくましさ" />
      </body>
    </html>
  )
}

const TypeSection: React.FC<{ appealType: AppealType }> = ({ appealType }) => {
  const typeJp = appealType
  const typeEn = toEn(appealType)

  const filteredMoves = moves.filter((m): m is Move => m.type === appealType)

  return (
    <>
      <h2>
        <span id={typeEn}></span>
        <a href={`#${typeEn}`}>{typeJp}</a>
      </h2>

      <MovesTable moves={filteredMoves} />
    </>
  )
}

const MovesTable: React.FC<{ moves: readonly Move[] }> = ({ moves }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>わざ名</th>
          <th>効果ID</th>
        </tr>
      </thead>
      <tbody>
        {moves.map((m) => (
          <Row key={m.id} {...m} />
        ))}
      </tbody>
    </table>
  )
}

const Row: React.FC<Move> = ({ id, name, effectId }: Move) => {
  return (
    <tr>
      <td>
        <a href={`./moves/${id.toString().padStart(3, '0')}.html`}>{name}</a>
      </td>
      <td>
        <a href={`./effects/${effectId}.html`}>{effectId}</a>
      </td>
    </tr>
  )
}
