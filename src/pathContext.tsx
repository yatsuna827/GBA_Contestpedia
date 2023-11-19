import React from 'react'

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

const getPathContext = (page: Page) => {
  // ランタイムで頑張る
}

type InnerLinkProps = {
  to: string[]
}
const InnerLink: React.FC<InnerLinkProps> = ({ to }) => {
  // useContextでcurrentPathを取得する
  // resolve(currentPath, to)
  return <></>
}

type Hoge = '/docs' | '/index.html' | `/docs/moves/${boolean}`
const define = (f: (t: Tools) => Root): { [P in Hoge]: any } => ({}) as any

type FilePath = { __file?: never }
type DirPath = { __dir?: never }
type Root = { __root?: never }
const file = (page: () => JSX.Element): FilePath => {
  return {}
}
const files = <T, K extends string, A extends readonly T[]>(
  source: A,
  page: (data: A[number]) => [K, JSX.Element]
): { [P in K]: FilePath } => {
  return Object.fromEntries(source.map((x) => [page(x)[0], {}])) as { [P in K]: FilePath }
}
const dir = (children: { [P in string]: FilePath | DirPath }): DirPath => {
  return {}
}
const root = (children: { [P in string]: FilePath | DirPath }): Root => ({})
type Tools = typeof poyo
const poyo = {
  file,
  files,
  dir,
  root,
}

const a = define((_: Tools) => {
  const effects = {
    'effects.html': _.file(() => <>Poyo</>),
    effects: _.dir({
      ..._.files(['a', 'b'] as const, (x) => [x, <></>]),
    }),
  }

  return _.root({
    docs: _.dir({
      ...effects,
    }),
    'index.html': _.file(() => <>Hello</>),
  })
})
