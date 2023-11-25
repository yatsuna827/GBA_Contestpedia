import { useLink } from '@src/engine/link'
import { globalCss } from '../root'

export const SpecPage: React.FC = () => {
  const cssSrc = useLink(globalCss)
  return (
    <html>
      <head>
        <title>GBAコンテスト辞典|コンテストの仕様</title>
        <link rel="stylesheet" href={cssSrc} />
      </head>

      <body>
        <h1>コンテストの仕様</h1>
        工事中
      </body>
    </html>
  )
}
