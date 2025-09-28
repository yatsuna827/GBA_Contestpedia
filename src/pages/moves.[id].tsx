import type { FC } from 'hono/jsx'

import { getEffect, getMoves } from '../data/effects'
import { type Move, comboFrom, comboTo } from '../data/moves'

import { AppealTypeSpan } from '../components/AppealTypeSpan'
import { Appeal, Jamming } from '../components/Points'

const Page: FC<Move> = ({ id, name, type, effectId }) => {
  const { appeal, jamming, inGameDescription, description } = getEffect(effectId)
  const sameEffectMoves = getMoves(effectId).filter((other) => other.id !== id)

  return (
    <>
      <title>{`GBAコンテスト辞典 | わざデータ / ${name}`}</title>

      <h1>わざ効果データ / {name}</h1>

      <h2>
        <span id="details"></span>
        <a href="#details">詳細</a>
      </h2>
      <h3>
        <span id="in-game"></span>
        <a href="#in-game">ゲーム内での表記</a>
      </h3>
      <table aria-label="わざの性能">
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
      <table aria-label="効果の詳細">
        <tr>
          <th>効果ID</th>
          <td>
            <a href={`/GBA_Contestpedia/effects/${effectId}`}>{effectId}</a>
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
    </>
  )
}

const MovesTable: FC<{ moves: readonly Move[] }> = ({ moves }) => {
  return (
    <table aria-label="わざ一覧">
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

const Row: FC<Move> = ({ id, name, type }) => {
  return (
    <tr>
      <td>
        <a href={`/GBA_Contestpedia/moves/${id.toString().padStart(3, '0')}`}>{name}</a>
      </td>
      <td>
        <AppealTypeSpan appealType={type} />
      </td>
    </tr>
  )
}

export { Page }
