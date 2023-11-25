import { InnerLink } from '@engine'

import { AppealType, toEn } from '@data/appealType'
import { movesRoute } from '@src/pages/moves'

export const AppealTypeSpan: React.FC<{ appealType: AppealType }> = ({ appealType }) => {
  const typeJp = appealType
  const typeEn = toEn(appealType)

  return (
    <span className={typeEn}>
      <InnerLink to={movesRoute.index} fragment={typeEn}>
        {typeJp}
      </InnerLink>
    </span>
  )
}
