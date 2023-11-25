import { assetRoute, createRoute, InnerLink } from '@engine'

import { Page } from './components/template'

import { movesRoute } from './moves'
import { effectsRoute } from './effects'
import { specsRoute } from './spec'

const TopPage: React.FC = () => {
  return (
    <Page title="GBAコンテスト辞典">
      <h1>GBAコンテスト辞典</h1>

      <h2>目次</h2>
      <ul>
        <li>
          <InnerLink to={movesRoute.index}>わざデータ</InnerLink>
        </li>
        <li>
          <InnerLink to={specsRoute.index}>コンテストの仕様</InnerLink>
        </li>
      </ul>
    </Page>
  )
}

const __dirname = import.meta.dir
export const globalCss = assetRoute({ name: 'style.css', src: `${__dirname}/style.css` })

export const rootRoute = createRoute({
  index: <TopPage />,
  subRoutes: {
    docs: createRoute({
      subRoutes: {
        moves: movesRoute,
        effects: effectsRoute,
        specs: specsRoute,
      },
      assets: [globalCss],
    }),
  },
})
