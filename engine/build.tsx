import fs from 'fs'
import { renderToStaticMarkup } from 'react-dom/server'

import { type DirRoute, type FileRoute, type AssetRoute, RouteProvider } from './route'
import { type PathStore, PathStoreProvider, buildPathStore } from './pathSystem'

const __rootDir = `${process.cwd()}`
const __docDir = `${__rootDir}/docs`

const _writeToFile = (route: Pick<FileRoute, 'key' | 'element'>, routeStore: PathStore) => {
  const path = routeStore[route.key]

  fs.writeFileSync(
    [__docDir, ...path].join('/'),
    `<!doctype html>
    ${renderToStaticMarkup(
      <PathStoreProvider value={routeStore}>
        <RouteProvider value={route}>{route.element}</RouteProvider>
      </PathStoreProvider>
    )}`
  )
}
const _copyAsset = ({ key, src }: Pick<AssetRoute, 'key' | 'src'>, routeStore: PathStore) => {
  const path = routeStore[key]

  fs.copyFileSync(src, [__docDir, ...path].join('/'))
}

const _build = (route: Pick<DirRoute, 'key' | 'children' | 'index'>, routeStore: PathStore) => {
  if (route.index) _writeToFile(route.index, routeStore)
  for (const child of Object.values(route.children)) {
    if (child.tag === 'DirRoute') {
      child satisfies DirRoute

      const path = routeStore[child.key]
      const realDirPath = [__docDir, ...path].join('/')
      if (!fs.existsSync(realDirPath)) fs.mkdirSync(realDirPath, { recursive: true })

      _build(child, routeStore)
    } else if (child.tag === 'FileRoute') {
      child satisfies FileRoute

      _writeToFile(child, routeStore)
    } else {
      child satisfies AssetRoute

      _copyAsset(child, routeStore)
    }
  }
}

export const build = (rootRoute: Pick<DirRoute, 'key' | 'children' | 'index'>) => {
  const routeStore = buildPathStore(rootRoute)

  if (fs.existsSync(__docDir)) fs.rmdirSync(__docDir, { recursive: true })
  fs.mkdirSync(__docDir, { recursive: true })

  _build(rootRoute, routeStore)
}
