import { FileRouteKey } from './routeKey'

export type AssetRoute = {
  tag: 'AssetRoute'
  key: FileRouteKey
  name: string
  src: string
}
type Options = {
  name: string
  src: string
}
export const assetRoute = ({ name, src }: Options): AssetRoute => {
  const key = Symbol('FileRouteKey') as FileRouteKey
  return {
    tag: 'AssetRoute',
    key,
    name,
    src,
  }
}
