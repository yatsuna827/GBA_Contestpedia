import { Hono } from 'hono'
import { ssgParams } from 'hono/ssg'
import { html } from 'hono/html'

import { Page as MovesPage } from './pages/moves'
import { Page as MovePage } from './pages/moves.[id]'
import { Page as EffectsPage } from './pages/effects'
import { Page as EffectPage } from './pages/effects.[id]'
import { Page as SpecPage } from './pages/spec'

import { moves } from './data/moves'
import { effects } from './data/effects'
import { Link } from './components/Link'
import { url } from './utils/url'
import { NotFoundError } from './error'

export const app = new Hono()

app.use('*', async (c, next) => {
  c.setRenderer((content) => {
    return c.html(
      <html lang="ja">
        <head>
          <meta charSet="UTF-8" />
          <link rel="stylesheet" href={url('/style.css')} />
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
          <Link href="/moves">わざデータ</Link>
        </li>
        <li>
          <Link href="/spec">コンテストの仕様</Link>
        </li>
      </ul>

      <div>
        {__SW__ ? (
          <Link href="/uninstall">ローカルモード無効化</Link>
        ) : (
          <Link href="/install">ローカルモード有効化</Link>
        )}
      </div>
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
    if (move == null) throw new NotFoundError(`Invalid id: ${param.id}`)

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
    if (eff == null) throw new NotFoundError(`Invalid id: ${param.id}`)

    return c.render(<EffectPage {...eff} />)
  }
)

app.get('/install', (c) => {
  return c.render(
    <div>
      {!__SW__ &&
        html`
          <script>
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker
                .register('${url('/sw.js')}', {
                  type: 'classic',
                  updateViaCache: 'none',
                  scope: '/GBA_Contestpedia/',
                })
                .then(
                  (registration) => {
                    console.log('Service Worker registered successfully:', registration.scope)
                    registration.update()
                  },
                  (error) => {
                    console.log('Service Worker registration failed:', error)
                  }
                )
            }
          </script>
        `}
      <Link href="/">Back</Link>
    </div>
  )
})
app.get('/uninstall', (c) => {
  return c.render(
    <div>
      {html`
        <script>
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(function (registrations) {
              for (const registration of registrations) {
                registration.unregister()
              }
            })
          }
        </script>
      `}
      <Link href="/">Back</Link>
    </div>
  )
})

export default app
