import type { FC } from 'hono/jsx'
import { AppealType, toEn } from '../data/appealType'
import { type Move, moves } from '../data/moves'

const Page: FC = () => {
  return (
    <>
      <title>GBAコンテスト辞典 | わざデータ</title>

      <h1>わざデータ</h1>
      <TypeSection appealType="かっこよさ" />
      <TypeSection appealType="うつくしさ" />
      <TypeSection appealType="かわいさ" />
      <TypeSection appealType="かしこさ" />
      <TypeSection appealType="たくましさ" />
    </>
  )
}

const TypeSection: FC<{ appealType: AppealType }> = ({ appealType }) => {
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

const MovesTable: FC<{ moves: readonly Move[] }> = ({ moves }) => {
  return (
    <table aria-label="わざ一覧">
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

const Row: FC<Move> = ({ id, name, effectId }: Move) => {
  return (
    <tr>
      <td>
        <a href={`/moves/${id.toString().padStart(3, '0')}`}>{name}</a>
      </td>
      <td>
        <a href={`/effects/${effectId}`}>{effectId}</a>
      </td>
    </tr>
  )
}

export { Page }
