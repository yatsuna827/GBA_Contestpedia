import { renderToStaticMarkup } from "react-dom/server"

export const buildIndexPage = () => renderToStaticMarkup(<IndexPage/>)

const IndexPage = () => (
<html>
  <head>
    <title>GBAコンテスト辞典</title>
    <link rel="stylesheet" href="./docs/style.css" />
  </head>
  
  <body>
    <h1>GBAコンテスト辞典</h1>
  
    <h2>目次</h2>
    <ul>
      <li><a href="./docs/moves.html">わざデータ</a></li>
      <li><a href="./docs/specs.html">コンテストの仕様</a></li>
    </ul>
  </body>
</html>)
