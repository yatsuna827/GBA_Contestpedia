import React from 'react'

import { useLink, InnerLink } from '@engine/link'
import { AppealType, toEn } from '@data/appealType'
import { type Move, moves } from '@data/moves'

import { effectsRoute } from '../effects'
import { movesRoute } from '../moves'
import { globalCss } from '../root'

export const MovesIndexPage: React.FC = () => {
  const cssSrc = useLink(globalCss)
  return (
    <html>
      <head>
        <title>GBAコンテスト辞典|わざデータ</title>
        <link rel="stylesheet" href={cssSrc} />
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

  const filteredMoves = moves.filter((m) => m.type === appealType)

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
        <InnerLink to={movesRoute.get(id)}>{name}</InnerLink>
      </td>
      <td>
        <InnerLink to={effectsRoute.get(effectId)}>{effectId}</InnerLink>
      </td>
    </tr>
  )
}
