import type { FileRoute } from '../route'

import { useSelfPath, useAbsolutePath, resolveRelativePath } from '../pathSystem'

export const useLink = (to: Pick<FileRoute, 'key'>) => {
  const selfPath = useSelfPath()
  const toPath = useAbsolutePath(to)

  return resolveRelativePath(selfPath, toPath)
}
