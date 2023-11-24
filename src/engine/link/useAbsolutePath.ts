import { createContext, useContext } from 'react'
import type { FileRoute, RouteStore } from '../route'

export const GlobalRouteContext = createContext<RouteStore>({})
export const useAbsolutePath = ({ key }: Pick<FileRoute, 'key'>) => {
  const globalRouteStore = useContext(GlobalRouteContext)

  return [...globalRouteStore[key]]!
}
