import { Move, moves } from '../data/moves.js'
import combos from '../data/combo.js'
import { effects, getEffect, getMoves } from '../data/effects.js'

import { Appeal, Jamming } from '../templates/points.js'
import { Type } from '../templates/type.js'

export const buildMovePage = ({id, name, type, effectId}: Move) => {
  const ef = getEffect(effectId)
  const comboTo = combos.filter(({from}) => from === id).map(({to}) => moves[to-1] as Move)
  const comboFrom = combos.filter(({to}) => to === id).map(({from}) => moves[from-1] as Move)

  return `
<html>

<head>
  <title>GBAコンテスト辞典|わざデータ / ${name}</title>
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <h1>わざ効果データ / ${name}</h1>

  <h2>
    <span id="details"></span>
    <a href="#details">詳細</a>
  </h2>
  <h3>
    <span id="in-game"></span>
    <a href="#in-game">ゲーム内での表記</a>
  </h3>
  <table>
    <tr><th>タイプ</th><td>${Type(type)}</td></tr>
    <tr><th>アピール</th><td>${Appeal(ef.appeal)}</td></tr>
    <tr><th>ぼうがい</th><td>${Jamming(ef.jamming)}</td></tr>
    <tr><th>せつめい</th><td>${ef.inGameDescription}</td></tr>
  </table>

  <h3>
    <span id="effect"></span>
    <a href="#effect">効果</a>
  </h3>
  <p>${ef.description}</p>

  <h2>
    <span id="related-data"></span>
    <a href="#related-data">関連データ</a>
  </h2>
  <h3>
    <span id="combo-to"></span>
    <a href="#combo-to">コンボ先のわざ</a>
  </h3>
  <table>
    <thead>
      <tr>
        <th>わざ名</th>
        <th>タイプ</th>
      </tr>
    </thead>
    <tbody>${(comboTo ?? []).map(({id, name, type}) => `
      <tr>
        <td><a href='./${id.toString().padStart(3, '0')}.html'>${name}</a></td>
        <td>${Type(type)}</td>
      </tr>`).join('')}
    </tbody>
  </table>
  <h3>
    <span id="combo-from"></span>
    <a href="#combo-from">コンボ元のわざ</a>
  </h3>
  <table>
    <thead>
      <tr>
        <th>わざ名</th>
        <th>タイプ</th>
      </tr>
    </thead>
    <tbody>${(comboFrom ?? []).map(({id, name, type}) => `
      <tr>
        <td><a href='./${id.toString().padStart(3, '0')}.html'>${name}</a></td>
        <td>${Type(type)}</td>
      </tr>`).join('')}
    </tbody>
  </table>
  <h3>
    <span id="same-effect-moves"></span>
    <a href="#same-effect-moves">同じ効果を持つわざ</a>
  </h3>
  <table>
    <thead>
      <tr>
        <th>わざ名</th>
        <th>タイプ</th>
      </tr>
    </thead>
    <tbody>${getMoves(ef.id).filter((other) => other.id !== id).map(({id, name, type}) => `
      <tr>
        <td><a href='./${id.toString().padStart(3, '0')}.html'>${name}</a></td>
        <td>${Type(type)}</td>
      </tr>`).join('')}
    </tbody>
  </table>
</body>
</html>
`
}

const TypeSection = (typeEn: string, typeJp: string) => {
  return `
  <h2>
    <span id="${typeEn}"></span>
    <a href="#${typeEn}">${typeJp}</a>
  </h2>
  <table>
    <thead>
      <tr>
        <th>わざ名</th>
        <th>効果ID</th>
      </tr>
    </thead>
    <tbody>${moves.filter(({type}) => type === typeJp).map(({id, name, effectId}) => `
      <tr>
        <td><a href='./moves/${id.toString().padStart(3, '0')}.html'>${name}</a></td>
        <td><a href='./effects/${effectId}.html'>${effectId}</a></td>
      </tr>`).join('')}
    </tbody>
  </table>`
}
export const buildMovesIndexPage = () => {
  return `
<html>

<head>
  <title>GBAコンテスト辞典|わざデータ</title>
  <link rel="stylesheet" href="./style.css">
</head>

<body>
  <h1>わざデータ</h1>
  ${TypeSection('cool', 'かっこよさ')}
  ${TypeSection('beautiful', 'うつくしさ')}
  ${TypeSection('cute', 'かわいさ')}
  ${TypeSection('clever', 'かしこさ')}
  ${TypeSection('tough', 'たくましさ')}
</body>
</html>
`
}
