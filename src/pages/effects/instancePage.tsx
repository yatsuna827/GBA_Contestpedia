import React from 'react'

import { InnerLink } from '@engine'
import { type MoveEffect, getMoves } from '@data/effects'
import { type Move } from '@data/moves'
import { Appeal, Jamming } from '@components/points'
import { AppealTypeSpan } from '@components/appealTypeSpan'
import { Page } from '@components/template'

import { movesRoute } from '../moves'

export const EffectPage: React.FC<MoveEffect> = ({ id, appeal, jamming, description, inGameDescription }) => {
  return (
    <Page title={`GBAコンテスト辞典|わざ効果データ / ID:${id}`}>
      <h1>わざ効果データ / ID:{id}</h1>

      <h2>
        <span id="details"></span>
        <a href="#details">詳細</a>
      </h2>
      <h3>
        <span id="in-game"></span>
        <a href="#in-game">ゲーム内での表記</a>
      </h3>
      <table>
        <tr>
          <th>アピール</th>
          <td>
            <Appeal points={appeal} />
          </td>
        </tr>
        <tr>
          <th>ぼうがい</th>
          <td>
            <Jamming points={jamming} />
          </td>
        </tr>
        <tr>
          <th>せつめい</th>
          <td>{inGameDescription}</td>
        </tr>
      </table>

      <h3>
        <span id="effect"></span>
        <a href="#effect">効果</a>
      </h3>
      <p>{description}</p>

      <h2>
        <span id="related-data"></span>
        <a href="#related-data">関連データ</a>
      </h2>
      <h3>
        <span id="instances"></span>
        <a href="#instances">この効果を持つわざ</a>
      </h3>
      <MovesTable moves={getMoves(id)} />
    </Page>
  )
}

const MovesTable: React.FC<{ moves: readonly Move[] }> = ({ moves }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>わざ名</th>
          <th>タイプ</th>
        </tr>
      </thead>
      <tbody>
        {moves.map((move) => (
          <Row key={move.id} {...move} />
        ))}
      </tbody>
    </table>
  )
}

const Row: React.FC<Move> = ({ id, name, type }) => {
  return (
    <tr>
      <td>
        <InnerLink to={movesRoute.get(id)}>{name}</InnerLink>
      </td>
      <td>
        <AppealTypeSpan appealType={type} />
      </td>
    </tr>
  )
}
