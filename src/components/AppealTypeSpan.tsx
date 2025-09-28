import type { FC } from 'hono/jsx'
import { AppealType, toEn } from '../data/appealType'

export const AppealTypeSpan: FC<{ appealType: AppealType }> = ({ appealType }) => {
  const typeJp = appealType
  const typeEn = toEn(appealType)

  return (
    <span className={typeEn}>
      <a href={`/GBA_Contestpedia/moves#${typeEn}`}>{typeJp}</a>
    </span>
  )
}
