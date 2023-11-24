import type { FileRouteKey } from './routeKey'

export type FileRoute = {
  tag: 'FileRoute'
  key: FileRouteKey
  name: string
  element: JSX.Element
}
export const htmlRoute = <T extends string>({ name, element }: { name: T; element: JSX.Element }): FileRoute => {
  const key = Symbol('FileRouteKey') as FileRouteKey
  return {
    tag: 'FileRoute',
    key,
    element,
    name: `${name}.html`,
  }
}
