import React from 'react'

import { InnerLink } from '@engine'
import { getEffect, getMoves } from '@data/effects'
import { type Move, comboFrom, comboTo } from '@data/moves'
import { AppealTypeSpan } from '@components/appealTypeSpan'
import { Appeal, Jamming } from '@components/points'
import { Page } from '@components/template'

import { effectsRoute } from '../effects'
import { movesRoute } from '../moves'

export const MovePage: React.FC<Move> = ({ id, name, type, effectId }) => {
  const { appeal, jamming, inGameDescription, description } = getEffect(effectId)
  const sameEffectMoves = getMoves(effectId).filter((other) => other.id !== id)

  return (
    <Page title={`GBAコンテスト辞典|わざデータ / ${name}`}>
      <h1>わざ効果データ / {name}</h1>

      <h2>
        <span id="details"></span>
        <a href="#details">詳細</a>
      </h2>
      <h3>
        <span id="in-game"></span>
        <a href="#in-game">ゲーム内での表記</a>
      </h3>
      <table>
        <caption>わざの性能</caption>
        <tr>
          <th>タイプ</th>
          <td>
            <AppealTypeSpan appealType={type} />
          </td>
        </tr>
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
      <table>
        <caption>効果の詳細</caption>
        <tr>
          <th>効果ID</th>
          <td>
            <InnerLink to={effectsRoute.get(effectId)}>{effectId}</InnerLink>
          </td>
        </tr>
        <tr>
          <th>説明</th>
          <td>{description}</td>
        </tr>
      </table>

      <h2>
        <span id="related-data"></span>
        <a href="#related-data">関連データ</a>
      </h2>
      <h3>
        <span id="combo-to"></span>
        <a href="#combo-to">コンボ先のわざ</a>
      </h3>
      <MovesTable moves={comboTo({ id })} />

      <h3>
        <span id="combo-from"></span>
        <a href="#combo-from">コンボ元のわざ</a>
      </h3>
      <MovesTable moves={comboFrom({ id })} />

      <h3>
        <span id="same-effect-moves"></span>
        <a href="#same-effect-moves">同じ効果を持つわざ</a>
      </h3>
      <MovesTable moves={sameEffectMoves} />
    </Page>
  )
}

const MovesTable: React.FC<{ moves: readonly Move[] }> = ({ moves }) => {
  return (
    <table>
      <caption>わざ一覧</caption>
      <thead>
        <tr>
          <th>わざ名</th>
          <th>タイプ</th>
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
