import type { FC } from 'hono/jsx'
import { type AppealType, toEn } from '../data/appealType'
import { Link } from './Link'

export const AppealTypeSpan: FC<{ appealType: AppealType }> = ({ appealType }) => {
  const typeJp = appealType
  const typeEn = toEn(appealType)

  return (
    <span className={typeEn}>
      <Link href={`/moves#${typeEn}`}>{typeJp}</Link>
    </span>
  )
}
