import { useContext } from 'react'

import { PathContext } from './context'
import { getRelativePath } from './path'
import { FileRoute } from '../route/fileRoute'
import { useAbsolutePath } from './useAbsolutePath'

type InnerLinkProps = {
  to: Pick<FileRoute, 'key'>
  fragment?: string
  children?: React.ReactNode
}
export const InnerLink: React.FC<InnerLinkProps> = ({ to, fragment, children }) => {
  const selfPath = useContext(PathContext)
  const toPath = useAbsolutePath(to)

  const relativePath = getRelativePath(selfPath, toPath)

  return <a href={fragment != null ? `${relativePath}#${fragment}` : relativePath}>{children}</a>
}
