import type { RouteKey } from './routeKey'

import type { DirRoute } from './dirRoute'
import type { FileRoute } from './fileRoute'

export type RouteStore = Record<RouteKey, string[]>
export const buildRouteStore = (root: Pick<DirRoute, 'key' | 'children' | 'index'>): RouteStore => {
  const contextMap: RouteStore = {}
  if (root.index) contextMap[root.index.key] = ['index.html']

  const q: [Pick<DirRoute, 'key' | 'children'>, string[]][] = [[root, []]]

  while (q.length) {
    const [route, path] = q.pop()!
    contextMap[route.key] = path

    for (const child of Object.values(route.children)) {
      if ('element' in child) {
        child satisfies FileRoute

        contextMap[child.key] = [...path, child.name]
      } else {
        child satisfies DirRoute

        if (child.index) contextMap[child.index.key] = [...path, `${child.name}.html`]
        q.push([child, [...path, child.name]])
      }
    }
  }

  return contextMap
}
