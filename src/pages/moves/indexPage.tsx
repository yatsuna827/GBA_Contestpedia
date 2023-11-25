import React from 'react'

import { InnerLink } from '@engine'
import { AppealType, toEn } from '@data/appealType'
import { type Move, moves } from '@data/moves'
import { Page } from '@components/template'

import { effectsRoute } from '../effects'
import { movesRoute } from '../moves'

export const MovesIndexPage: React.FC = () => {
  return (
    <Page title="GBAコンテスト辞典|わざデータ">
      <h1>わざデータ</h1>
      <TypeSection appealType="かっこよさ" />
      <TypeSection appealType="うつくしさ" />
      <TypeSection appealType="かわいさ" />
      <TypeSection appealType="かしこさ" />
      <TypeSection appealType="たくましさ" />
    </Page>
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
      <caption>わざ一覧</caption>
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
