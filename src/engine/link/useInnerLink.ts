import { useContext } from 'react'

import { PathContext } from './context'
import { getRelativePath } from './path'
import { FileRoute } from '../route'
import { useAbsolutePath } from './useAbsolutePath'

export const useInnerLink = (to: Pick<FileRoute, 'key'>) => {
  const selfPath = useContext(PathContext)
  const toPath = useAbsolutePath(to)

  return getRelativePath(selfPath, toPath)
}
