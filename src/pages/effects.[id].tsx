import type { FC } from 'hono/jsx'

import { type MoveEffect, getMoves } from '../data/effects'
import { type Move } from '../data/moves'

import { Appeal, Jamming } from '../components/Points'
import { AppealTypeSpan } from '../components/AppealTypeSpan'

const Page: FC<MoveEffect> = ({ id, appeal, jamming, description, inGameDescription }) => {
  return (
    <>
      <title>{`GBAコンテスト辞典 | わざ効果データ / ID:${id}`}</title>

      <h1>わざ効果データ / ID:{id}</h1>

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
        {moves.map((move) => (
          <Row key={move.id} {...move} />
        ))}
      </tbody>
    </table>
  )
}

const Row: FC<Move> = ({ id, name, type }) => {
  return (
    <tr>
      <td>
        <a href={`/moves/${id.toString().padStart(3, '0')}`}>{name}</a>
      </td>
      <td>
        <AppealTypeSpan appealType={type} />
      </td>
    </tr>
  )
}

export { Page }
