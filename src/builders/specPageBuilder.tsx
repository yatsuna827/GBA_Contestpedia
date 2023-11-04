import { renderToStaticMarkup } from 'react-dom/server'

export const buildSpecPage = () =>
  renderToStaticMarkup(
    <html>
      <head>
        <title>GBAコンテスト辞典|コンテストの仕様</title>
        <link rel="stylesheet" href="./docs/style.css" />
      </head>

      <body>
        <h1>コンテストの仕様</h1>
        工事中
      </body>
    </html>,
  )
