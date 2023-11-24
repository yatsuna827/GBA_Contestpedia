import { type FileRoute, htmlRoute } from './fileRoute'
import type { RouteKey } from './routeKey'

export type DirRoute = {
  key: RouteKey
  name: string
  index: Pick<FileRoute, 'key' | 'element'> | null
  children: Record<string, FileRoute<string> | DirRoute>
}

// TODO
// - indexがnullならnullを返したい

export const createRoute = ({
  index,
  fileRoutes,
  subRoutes,
}: {
  index?: JSX.Element
  fileRoutes?: FileRoute[]
  subRoutes?: Record<string, Omit<DirRoute, 'name'>>
}): Omit<DirRoute, 'name'> => {
  const key = Symbol('RouteKey') as RouteKey
  const children = {
    ...Object.fromEntries(subRoutes ? Object.entries(subRoutes).map(([name, dir]) => [name, { ...dir, name }]) : []),
    ...Object.fromEntries(fileRoutes?.map((r) => [r.name, r]) ?? []),
  }

  return {
    key,
    index: index ? htmlRoute({ name: 'index', element: index }) : null,
    children,
  }
}

// TODO: 名前がださいのでオーバーロード的なことをしたい
export const createRoute2 = <T extends { id: string | number }, U extends readonly [...T[], T]>({
  index,
  source,
  selector,
  subRoutes,
}: {
  index?: JSX.Element
  source: U
  selector: (data: U[number]) => FileRoute
  subRoutes?: Record<string, Omit<DirRoute, 'name'>>
}) => {
  const key = Symbol('RouteKey') as RouteKey
  const fileRouteMap = Object.fromEntries(source.map((data) => [data.id, selector(data)]))

  const children = {
    ...Object.fromEntries(subRoutes ? Object.entries(subRoutes).map(([name, dir]) => [name, { ...dir, name }]) : []),
    ...Object.fromEntries(Object.values(fileRouteMap).map((value) => [value.name, value])),
  }

  const get = (x: U[number]['id']) => {
    if (!(x in fileRouteMap)) throw new Error(`${x} is not in source.`)
    return fileRouteMap[x]
  }

  return {
    key,
    index: index ? htmlRoute({ name: 'index', element: index }) : null,
    children,
    get,
  }
}
