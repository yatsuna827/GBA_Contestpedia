import type { Path } from './types'

import { useRoute } from '../route'
import { usePathStore } from './usePathStore'

export const useSelfPath = (): Path => {
  const selfRoute = useRoute()
  const pathStore = usePathStore()

  if (!selfRoute) throw new Error('useSelfPath must be used inside a RouteContext')

  const { key } = selfRoute
  if (!pathStore[key]) throw new Error(`key: ${String(key)} is not found in pathStore`)

  return [...pathStore[key]]
}
