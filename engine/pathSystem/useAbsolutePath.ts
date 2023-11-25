import type { Path } from './types'
import type { FileRoute } from '../route'

import { usePathStore } from './usePathStore'

export const useAbsolutePath = ({ key }: Pick<FileRoute, 'key'>): Path => {
  const pathStore = usePathStore()

  if (!pathStore[key]) throw new Error(`key: ${String(key)} is not found in pathStore`)

  return [...pathStore[key]]
}
