import { useLink } from '@engine'

import { globalCss } from '../root'

type Props = {
  title: string
  children: React.ReactNode
}
export const Page: React.FC<Props> = ({ title, children }) => {
  const cssSrc = useLink(globalCss)
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <link rel="stylesheet" href={cssSrc} />
      </head>

      <body>{children}</body>
    </html>
  )
}
