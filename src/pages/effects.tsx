import type { FC } from 'hono/jsx'
import { type MoveEffect, effects } from '../data/effects'

const Page: FC = () => {
  return (
    <>
      <title>GBAコンテスト辞典 | わざ効果データ</title>

      <h1>わざ効果データ</h1>

      <EffectsTable effects={effects} />
    </>
  )
}

const EffectsTable: FC<{ effects: readonly MoveEffect[] }> = ({ effects }) => {
  return (
    <table aria-label="効果一覧">
      <thead>
        <tr>
          <th>ID</th>
          <th>効果</th>
        </tr>
      </thead>
      <tbody>
        {effects.map((e) => (
          <Row key={e.id} {...e} />
        ))}
      </tbody>
    </table>
  )
}

const Row: FC<MoveEffect> = ({ id, description }) => {
  return (
    <tr>
      <td>
        <a href={`/effects/${id}.html`}>{id}</a>
      </td>
      <td>{description}</td>
    </tr>
  )
}

export { Page }
