import { type FileRoute, htmlRoute } from './fileRoute'
import type { RouteKey } from './routeKey'

export type DirRoute = {
  tag: 'DirRoute'
  key: RouteKey
  name: string
  index: Pick<FileRoute, 'key' | 'element'> | null
  children: Record<string, FileRoute | DirRoute>
}

type Index = {
  index: JSX.Element
}
type SubRoutes = {
  subRoutes?: Record<string, Omit<DirRoute, 'name'>>
}
type Source<T extends readonly unknown[] = []> = {
  source: T
  selector: (data: T[number]) => FileRoute
}

type Data = { id: string | number }
type DataTuple = readonly [...Data[], Data]

type CreateRouteFunction = {
  (x: SubRoutes & Silentify<Index & Source>): {
    tag: 'DirRoute'
    key: RouteKey
    index: null
    children: Record<string, FileRoute | DirRoute>
    get: (x: never) => FileRoute
  }

  (x: SubRoutes & Index & Silentify<Source>): {
    tag: 'DirRoute'
    key: RouteKey
    index: FileRoute
    children: Record<string, FileRoute | DirRoute>
    get: (x: never) => FileRoute
  }

  <T extends DataTuple>(
    x: SubRoutes & Source<T> & Silentify<Index>
  ): {
    tag: 'DirRoute'
    key: RouteKey
    index: null
    children: Record<string, FileRoute | DirRoute>
    get: (x: T[number]['id']) => FileRoute
  }

  <T extends DataTuple>(
    x: SubRoutes & Index & Source<T>
  ): {
    tag: 'DirRoute'
    key: RouteKey
    index: FileRoute
    children: Record<string, FileRoute | DirRoute>
    get: (x: T[number]['id']) => FileRoute
  }
}

type Arg<T extends DataTuple> = SubRoutes & _<Index> & _<Source<T>>
type Ret = {
  tag: 'DirRoute'
  key: RouteKey
  children: Record<string, FileRoute | DirRoute>
  index: any
  get: (x: any) => FileRoute
}

export const createRoute: CreateRouteFunction = <T extends DataTuple>({
  index,
  source,
  selector,
  subRoutes,
}: Arg<T>): Ret => {
  const key = Symbol('RouteKey') as RouteKey
  const fileRouteMap = source && selector ? Object.fromEntries(source.map((data) => [data.id, selector(data)])) : {}

  const children = {
    ...Object.fromEntries(subRoutes ? Object.entries(subRoutes).map(([name, dir]) => [name, { ...dir, name }]) : []),
    ...Object.fromEntries(Object.values(fileRouteMap).map((value) => [value.name, value])),
  }

  return {
    tag: 'DirRoute',
    key,
    index: index ? htmlRoute({ name: 'index', element: index }) : null,
    children,
    get(x: T[number]['id']) {
      if (!(x in fileRouteMap)) throw new Error(`${x} is not in source.`)
      return fileRouteMap[x]
    },
  }
}

type Silentify<T> = {
  [K in keyof T]?: undefined
}
type _<T> = T | Silentify<T>
