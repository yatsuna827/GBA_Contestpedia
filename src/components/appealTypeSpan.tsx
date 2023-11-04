import { AppealType, toEn } from '@data/appealType'

export const AppealTypeSpan: React.FC<{ appealType: AppealType }> = ({ appealType }) => {
  const typeJp = appealType
  const typeEn = toEn(appealType)

  return (
    <span className={typeEn}>
      <a href={`../moves.html#${typeEn}`}>{typeJp}</a>
    </span>
  )
}
