import { createRoute } from '@engine/route'
import { InnerLink } from '@engine/link'

import { movesRoute } from './moves'
import { effectsRoute } from './effects'
import { specsRoute } from './spec'

const TopPage: React.FC = () => (
  <html>
    <head>
      <title>GBAコンテスト辞典</title>
      <link rel="stylesheet" href="./docs/style.css" />
    </head>

    <body>
      <h1>GBAコンテスト辞典</h1>

      <h2>目次</h2>
      <ul>
        <li>
          <InnerLink to={movesRoute.index!}>わざデータ</InnerLink>
        </li>
        <li>
          <InnerLink to={specsRoute.index!}>コンテストの仕様</InnerLink>
        </li>
      </ul>
    </body>
  </html>
)

export const rootRoute = createRoute({
  index: <TopPage />,
  subRoutes: {
    docs: createRoute({
      subRoutes: {
        moves: movesRoute,
        effects: effectsRoute,
        specs: specsRoute,
      },
    }),
  },
})
