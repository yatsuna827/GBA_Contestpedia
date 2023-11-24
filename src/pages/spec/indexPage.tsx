import { createRoute } from '@src/engine/route/dirRoute'
import React from 'react'

export const SpecPage: React.FC = () => (
  <html>
    <head>
      <title>GBAコンテスト辞典|コンテストの仕様</title>
      <link rel="stylesheet" href="./docs/style.css" />
    </head>

    <body>
      <h1>コンテストの仕様</h1>
      工事中
    </body>
  </html>
)

export const specsRoute = createRoute({
  index: <SpecPage />,
})
