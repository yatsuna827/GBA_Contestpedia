import fs from 'fs'
import { renderToStaticMarkup } from 'react-dom/server'

import { type DirRoute, type FileRoute, type RouteStore, buildRouteStore } from './route'
import { PathInjector, GlobalRouteContext } from './link'

const __rootDir = `${process.cwd()}`
const __docDir = `${__rootDir}/docs`

const _writeToFile = (route: Pick<FileRoute, 'key' | 'element'>, routeStore: RouteStore) => {
  const path = routeStore[route.key]

  fs.writeFileSync(
    [__docDir, ...path].join('/'),
    renderToStaticMarkup(
      <GlobalRouteContext.Provider value={routeStore}>
        <PathInjector route={route}>{route.element}</PathInjector>
      </GlobalRouteContext.Provider>
    )
  )
}

const _build = (route: Pick<DirRoute, 'key' | 'children' | 'index'>, routeStore: RouteStore) => {
  if (route.index) _writeToFile(route.index, routeStore)
  for (const child of Object.values(route.children)) {
    if (child.tag === 'DirRoute') {
      child satisfies DirRoute

      const path = routeStore[child.key]
      const realDirPath = [__docDir, ...path].join('/')
      if (!fs.existsSync(realDirPath)) fs.mkdirSync(realDirPath, { recursive: true })

      _build(child, routeStore)
    } else {
      child satisfies FileRoute

      _writeToFile(child, routeStore)
    }
  }
}

export const build = (rootRoute: Pick<DirRoute, 'key' | 'children' | 'index'>) => {
  const routeStore = buildRouteStore(rootRoute)

  if (fs.existsSync(__docDir)) fs.rmdirSync(__docDir, { recursive: true })
  fs.mkdirSync(__docDir, { recursive: true })

  _build(rootRoute, routeStore)

  // FIXME: htmlファイル以外のファイルを扱う仕組みを作っていないので、決め打ちコピーになっている
  fs.copyFileSync(`${__rootDir}/src/style.css`, `${__docDir}/docs/style.css`)
}
