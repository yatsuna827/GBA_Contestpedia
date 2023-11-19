import React from 'react'

import combos from '@data/combo'
import { getEffect, getMoves } from '@data/effects'
import { type Move, moves } from '@data/moves'

import { AppealTypeSpan } from '@components/appealTypeSpan'
import { Appeal, Jamming } from '@components/points'

export const MovePage: React.FC<Move> = ({ id, name, type, effectId }) => {
  const { appeal, jamming, inGameDescription, description } = getEffect(effectId)
  const sameEffectMoves = getMoves(effectId).filter((other) => other.id !== id)
  const comboTo = combos.filter(({ from }) => from === id).map(({ to }) => moves[to - 1] as Move)
  const comboFrom = combos.filter(({ to }) => to === id).map(({ from }) => moves[from - 1] as Move)

  return (
    <html>
      <head>
        <title>{`GBAコンテスト辞典|わざデータ / ${name}`}</title>
        <link rel="stylesheet" href="../style.css" />
      </head>

      <body>
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
          <tr>
            <th>効果ID</th>
            <td>
              <a href={`../effects/${effectId}.html`}>{effectId}</a>
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
        <MovesTable moves={comboTo ?? []} />

        <h3>
          <span id="combo-from"></span>
          <a href="#combo-from">コンボ元のわざ</a>
        </h3>
        <MovesTable moves={comboFrom ?? []} />

        <h3>
          <span id="same-effect-moves"></span>
          <a href="#same-effect-moves">同じ効果を持つわざ</a>
        </h3>
        <MovesTable moves={sameEffectMoves} />
      </body>
    </html>
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
        <a href={`./${id.toString().padStart(3, '0')}.html`}>{name}</a>
      </td>
      <td>
        <AppealTypeSpan appealType={type} />
      </td>
    </tr>
  )
}