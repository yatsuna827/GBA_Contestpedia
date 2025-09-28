import { Hono } from 'hono'
import { ssgParams } from 'hono/ssg'
import { Style } from 'hono/css'

import { Page as MovesPage } from './pages/moves'
import { Page as MovePage } from './pages/moves.[id]'
import { Page as EffectsPage } from './pages/effects'
import { Page as EffectPage } from './pages/effects.[id]'
import { Page as SpecPage } from './pages/spec'

import { moves } from './data/moves'
import { effects } from './data/effects'

const app = new Hono()

app.use('*', async (c, next) => {
  c.setRenderer((content) => {
    return c.html(
      <html lang="ja">
        <head>
          <meta charSet="UTF-8" />
          <link rel="stylesheet" href="/style.css" />
        </head>

        <body>{content}</body>
      </html>
    )
  })
  await next()
})

app.get('/', (c) => {
  return c.render(
    <>
      <title>GBAコンテスト辞典</title>

      <h1>GBAコンテスト辞典</h1>

      <h2>目次</h2>
      <ul>
        <li>
          <a href="/moves">わざデータ</a>
        </li>
        <li>
          <a href="/spec">コンテストの仕様</a>
        </li>
      </ul>
    </>
  )
})

app.get('/spec', (c) => {
  return c.render(<SpecPage />)
})

app.get('/moves', (c) => {
  return c.render(<MovesPage />)
})
app.get(
  '/moves/:id',
  ssgParams(() => {
    return moves.map(({ id }) => ({ id: id.toString().padStart(3, '0') }))
  }),
  (c) => {
    const param = c.req.param()

    const move = moves.find(({ id }) => id == Number(param.id))
    if (move == null) throw new Error()

    return c.render(<MovePage {...move} />)
  }
)

app.get('/effects', (c) => {
  return c.render(<EffectsPage />)
})
app.get(
  '/effects/:id',
  ssgParams(() => {
    return effects.map(({ id }) => ({ id }))
  }),
  (c) => {
    const param = c.req.param()

    const eff = effects.find(({ id }) => id == param.id)
    if (eff == null) throw new Error()

    return c.render(<EffectPage {...eff} />)
  }
)

export default app
