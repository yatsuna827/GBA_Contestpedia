import { FileRoute } from '../route'

import { PathContext } from './context'
import { useAbsolutePath } from './useAbsolutePath'

export const PathInjector: React.FC<{ route: Pick<FileRoute<string>, 'key'>; children: React.ReactNode }> = ({
  route,
  children,
}) => {
  const path = useAbsolutePath(route)

  return <PathContext.Provider value={path}>{children}</PathContext.Provider>
}
