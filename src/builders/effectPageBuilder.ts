import {EffectId, MoveEffect, effects, getMoves} from '../data/effects.js'

import { Appeal, Jamming } from '../templates/points.js'
import { Type } from '../templates/type.js'

export const buildEffectPage = ({id, appeal, jamming, description, inGameDescription}: MoveEffect) => `
<html>

<head>
  <title>GBAコンテスト辞典|わざ効果データ / ID:${id}</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1>わざ効果データ / ID:${id}</h1>

  <h2>
    <span id="details"></span>
    <a href="#details">詳細</a>
  </h2>
  <h3>
    <span id="in-game"></span>
    <a href="#in-game">ゲーム内での表記</a>
  </h3>
  <table>
    <tr><th>アピール</th><td>${Appeal(appeal)}</span></td></tr>
    <tr><th>ぼうがい</th><td>${Jamming(jamming)}</span></td></tr>
    <tr><th>せつめい</th><td>${inGameDescription}</td></tr>
  </table>

  <h3>
    <span id="effect"></span>
    <a href="#effect">効果</a>
  </h3>
  <p>${description}</p>

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
    <tbody>${getMoves(id).map(({id, name, type}) => `
      <tr>
        <td><a href='../moves/${id.toString().padStart(3, '0')}.html'>${name}</a></td>
        <td>${Type(type)}</td>
      </tr>`).join('')}
    </tbody>
  </table>
</body>
</html>
`

export const buildEffectsIndexPage = () => `
<html>

<head>
  <title>GBAコンテスト辞典|わざ効果データ</title>
  <link rel="stylesheet" href="./style.css">
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
    <tbody>${effects.map(({id, description}) => `
      <tr>
        <td><a href='./effects/${id}.html'>${id}</a></td>
        <td>${description}</td>
      </tr>`).join('')}
    </tbody>
  </table>
</body>
</html>
`
