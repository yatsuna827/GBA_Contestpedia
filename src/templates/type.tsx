import { AppealType, toEn } from '../data/appealType'

export const AppealTypeSpan: React.FC<{ t: AppealType }> = ({ t }) => {
  const typeEn = toEn(t)

  return (
    <span className={typeEn}>
      <a href={`../moves.html#${typeEn}`}>{t}</a>
    </span>
  )
}

export const Type = (t: AppealType) => <AppealTypeSpan t={t} />
