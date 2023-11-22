import React from 'react'
import { moves, Move } from './data/moves'
import { MovePage, MovesIndexPage } from './pages/moves'
import { EffectPage, EffectsIndexPage } from './pages/effects'
import { effects } from './data/effects'
import { SpecPage } from './pages/spec'
import { TopPage } from './pages/top'

export const PathContext = React.createContext([''])

export type Page = {
  id: string
  name: string
  builder: () => JSX.Element
}
export type MappedPages<T> = {
  source: T[]
  mapper: (x: T) => Page
}

type InnerLinkProps = {
  to: string[]
}
const InnerLink: React.FC<InnerLinkProps> = ({ to }) => {
  // useContextでcurrentPathを取得する
  // resolve(currentPath, to)
  return <></>
}

// TODO
// - indexがnullならnullを返したい

type RouteKey = symbol & { readonly __RouteKey: unique symbol }
type FileRouteKey = RouteKey & { readonly __FileRouteKey: unique symbol }
type FileRoute<T extends string = string> = {
  key: FileRouteKey
  name: T
  element: JSX.Element
}
type DirRoute = {
  key: RouteKey
  name: string
  index: JSX.Element | null
  children: Record<string, FileRoute<string> | DirRoute>
}

const htmlRoute = <T extends string>({ name, element }: { name: T; element: JSX.Element }): FileRoute<`${T}.html`> => {
  const key = Symbol('FileRouteKey') as FileRouteKey
  return {
    key,
    element,
    name: `${name}.html`,
  }
}

const createRoute = ({
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
    index: index ?? null,
    children,
  }
}

const createRoute2 = <T extends { id: string }, U extends readonly [...T[], T]>({
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
    index: index ?? null,
    children,
    get,
  }
}

const _moves = createRoute({
  index: <MovesIndexPage />,
  fileRoutes: moves
    .filter((x): x is Move => !!x.effectId)
    .map((m) => htmlRoute({ name: m.id.toString().padStart(3, '0'), element: <MovePage {...m} /> })),
})
const _effects = createRoute2({
  index: <EffectsIndexPage />,
  source: effects,
  selector: (e) => htmlRoute({ name: e.id, element: <EffectPage {...e} /> }),
})
const _specs = createRoute({
  index: <SpecPage />,
})

const _root = createRoute({
  index: <TopPage />,
  subRoutes: {
    docs: createRoute({
      subRoutes: {
        moves: _moves,
        effects: _effects,
        specs: _specs,
      },
    }),
  },
})

// ...

const makeTree = (root: Omit<DirRoute, 'name'>) => {
  const contextMap: Record<RouteKey, string[]> = {}

  const q: [DirRoute, string[]][] = [[{ ...root, name: '' }, ['']]]
  //if (root.index) console.log('/index.html')

  while (q.length) {
    const [route, path] = q.pop()!
    contextMap[route.key] = path

    for (const child of Object.values(route.children)) {
      if ('element' in child) {
        contextMap[child.key] = [...path, child.name]
      } else {
        q.push([child, [...path, child.name]])
      }
    }
  }

  return contextMap
}

const _globalRouteStore = makeTree(_root)

const globalRouteContext = React.createContext<Record<RouteKey, string[]>>({})
const useAbsolutePath = ({ key }: { key: FileRouteKey }) => {
  const globalRouteStore = _globalRouteStore // React.useContext(globalRouteContext)
  // if not included, throws error
  return _globalRouteStore[key]!
}

export const test = () => {
  const map = makeTree(_root)
  console.log(map[_root.key].join('/'))
  console.log(map[_moves.key].join('/'))
  console.log(map[_effects.key].join('/'))
  console.log(map[_specs.key].join('/'))

  const path = useAbsolutePath(_effects.get('A00'))
  console.log(path.join('/'))
  // useAbsolutePath(_moves) // type error!!
}
