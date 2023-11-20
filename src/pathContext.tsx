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

// _root['docs']['effects.html']
// _root['']

/*
const paths = {
  index,
  namedChildren,
  mappedChildren,
}

- hoge.html
- hoge/
  - foo.html
  - bar.html
  - 001.html
  - 002.html
  ...

みたいになる
*/

// mappedの宣言は1回でいい、複数sourceがあるならマージしてください。
// サブディレクトリは？

// やりたかったことってなんだっけ？？？
// 「パスの安全な計算」だったはずでは？
// パスオブジェクトさえあればいいはずでは？？？？？

// ドキュメント全体の構造をオブジェクトとして表現したい
// 「ここはMovesからマッピングされているからMove.idを渡して特定できる」みたいなこともやりたい

// useGlobalPath(fileRoute);

type FileRoute<T extends string = string> = {
  name: T
  element: JSX.Element
}
type RouteKey = symbol & { readonly __RouteKey: unique symbol }
type DirRoute = {
  key: RouteKey,
  name: string,
  index: JSX.Element | null,
  children: (FileRoute<string> | DirRoute)[]
}

const htmlRoute = <T extends string,>({name, element}: {name: T, element: JSX.Element}): FileRoute<`${T}.html`> => {
  return { 
    element, 
    name: `${name}.html` 
  }
}

const createRoute = ({index, children, subRoutes}: {index?: JSX.Element, children?: FileRoute[], subRoutes?: Record<string, Omit<DirRoute, 'name'>>}): Omit<DirRoute, 'name'> => {
  const key = Symbol('RouteKey') as RouteKey

  return {
    key,
    index: index ?? null,
    children: [
      ...(subRoutes ? Object.entries(subRoutes).map(([name, dir]) => ({...dir, name})) : []),
      ...(children ?? []),
    ]
  }
}

const _moves = createRoute({
  index: <MovesIndexPage />,
  children: moves
    .filter((x): x is Move => !!x.effectId)
    .map((m) => htmlRoute({ name: m.id.toString().padStart(3, '0'), element: <MovePage {...m} /> })),
})
const _effects = createRoute({
  index: <EffectsIndexPage/>,
  children: effects.map((e) => htmlRoute({name: e.id, element: <EffectPage {...e} />}))
})
const _specs = createRoute({
  index: <SpecPage/>
})

const _root = createRoute({
  index: <TopPage/>,
  subRoutes: {
    'moves': _moves,
    'effects': _effects,
    'specs': _specs,
  }
})

// ...

const globalRouteContext = React.createContext<Record<RouteKey, string[]>>({});
const useAbsolutePath = ({key}: {key: RouteKey}) => {
  const globalRouteStore = React.useContext(globalRouteContext)
  // if not included, throws error
  return globalRouteStore[key]
}

const makeTree = (root: Omit<DirRoute, 'name'>) => {
  const q: [DirRoute, string[]][] = [[{...root, name: ''}, ['']]]
  if (root.index) console.log('/index.html')

  while (q.length) {
    const [route, path] = q.pop()!
    for (const child of route.children) {
      if ('element' in child) {
        console.log([...path, child.name].join('/'))
      } else {
        q.push([child, [...path, child.name]])
        if (route.index) console.log([...path, `${child.name}.html`])
      }
    }
  }
}

export const test = () => {
  makeTree(_root)
}

