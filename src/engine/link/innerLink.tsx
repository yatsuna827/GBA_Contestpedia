import React from 'react'

import { PathContext } from './context'
import { getRelativePath } from './path'
import { FileRoute } from '../route/fileRoute'
import { useAbsolutePath } from './useAbsolutePath'

type InnerLinkProps = {
  to: Pick<FileRoute, 'key'>
  children?: React.ReactNode
}
export const InnerLink: React.FC<InnerLinkProps> = ({ to, children }) => {
  const selfPath = React.useContext(PathContext)
  const toPath = useAbsolutePath(to)

  return <a href={getRelativePath(selfPath, toPath)}>{children}</a>
}
