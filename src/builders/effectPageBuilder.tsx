import React from 'react'

import { renderToStaticMarkup } from 'react-dom/server'
import { MoveEffect, effects, getMoves } from '../data/effects.js'

import { Appeal, Jamming } from '../templates/points.js'
import { Type } from '../templates/type.js'
import { Move } from '../data/moves.js'

export const buildEffectPage = (effect: MoveEffect) => renderToStaticMarkup(<EffectPage {...effect} />)

const EffectPage = ({ id, appeal, jamming, description, inGameDescription }: MoveEffect) => {
  return (
    <html>
      <head>
        <title>{`GBAコンテスト辞典|わざ効果データ / ID:${id}`}</title>
        <link rel="stylesheet" href="../style.css" />
      </head>

      <body>
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
            <td>{Appeal(appeal)}</td>
          </tr>
          <tr>
            <th>ぼうがい</th>
            <td>{Jamming(jamming)}</td>
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
        <table>
          <thead>
            <tr>
              <th>わざ名</th>
              <th>タイプ</th>
            </tr>
          </thead>
          <tbody>
            {getMoves(id).map((move) => (
              <EffectPageTableRow key={move.id} {...move} />
            ))}
          </tbody>
        </table>
      </body>
    </html>
  )
}

const EffectPageTableRow: React.FC<Move> = ({ id, name, type }: Move) => {
  const path = `../moves/${id.toString().padStart(3, '0')}.html`

  return (
    <tr>
      <td>
        <a href={path}>{name}</a>
      </td>
      <td>{Type(type)}</td>
    </tr>
  )
}

export const buildEffectsIndexPage = () => renderToStaticMarkup(<EffectsIndexPage />)

const EffectsIndexPage = () => {
  return (
    <html>
      <head>
        <title>GBAコンテスト辞典|わざ効果データ</title>
        <link rel="stylesheet" href="./style.css" />
      </head>

      <body>
        <h1>わざ効果データ</h1>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>効果</th>
            </tr>
          </thead>
          <tbody>
            {effects.map((e) => (
              <EffectsIndexPageTableRow key={e.id} {...e} />
            ))}
          </tbody>
        </table>
      </body>
    </html>
  )
}

const EffectsIndexPageTableRow: React.FC<MoveEffect> = ({ id, description }) => {
  return (
    <tr>
      <td>
        <a href={`./effects/${id}.html`}>{id}</a>
      </td>
      <td>{description}</td>
    </tr>
  )
}
