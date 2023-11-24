import type { FileRouteKey } from './routeKey'

export type FileRoute = {
  key: FileRouteKey
  name: string
  element: JSX.Element
}
export const htmlRoute = <T extends string>({ name, element }: { name: T; element: JSX.Element }): FileRoute => {
  const key = Symbol('FileRouteKey') as FileRouteKey
  return {
    key,
    element,
    name: `${name}.html`,
  }
}
