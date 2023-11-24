import React from 'react'
import type { RouteKey, FileRoute, RouteStore } from '../route'

export const GlobalRouteContext = React.createContext<RouteStore>({})
export const useAbsolutePath = ({ key }: Pick<FileRoute, 'key'>) => {
  const globalRouteStore = React.useContext(GlobalRouteContext)

  return [...globalRouteStore[key]]!
}
