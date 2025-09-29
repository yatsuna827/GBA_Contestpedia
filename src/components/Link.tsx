import type { FC, JSX } from 'hono/jsx'
import { url } from '../utils/url'

export const Link: FC<JSX.IntrinsicElements['a']> = ({ href, ...props }) => {
  return <a href={href != null ? url(href) : undefined} {...props} />
}
