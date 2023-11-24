import type { FileRouteKey } from './routeKey'

export type FileRoute<T extends string = string> = {
  key: FileRouteKey
  name: T
  element: JSX.Element
}
export const htmlRoute = <T extends string>({
  name,
  element,
}: {
  name: T
  element: JSX.Element
}): FileRoute<`${T}.html`> => {
  const key = Symbol('FileRouteKey') as FileRouteKey
  return {
    key,
    element,
    name: `${name}.html`,
  }
}
