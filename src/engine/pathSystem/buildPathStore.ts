import type { AssetRoute, DirRoute, FileRoute } from '../route'
import type { Path, PathStore } from './types'

export const buildPathStore = (root: Pick<DirRoute, 'key' | 'children' | 'index'>): PathStore => {
  const pathStore: PathStore = {}
  if (root.index) pathStore[root.index.key] = ['index.html']

  const q: [Pick<DirRoute, 'key' | 'children'>, Path][] = [[root, []]]

  while (q.length) {
    const [route, path] = q.pop()!
    pathStore[route.key] = path

    for (const child of Object.values(route.children)) {
      pathStore[child.key] = [...path, child.name]
      if (child.tag === 'DirRoute') {
        if (child.index) pathStore[child.index.key] = [...path, `${child.name}.html`]
        q.push([child, [...path, child.name]])
      } else if (child.tag === 'FileRoute') {
        child satisfies FileRoute
        // なにもしなくていい
      } else {
        child satisfies AssetRoute
        // なにもしなくていい
      }
    }
  }

  return pathStore
}
