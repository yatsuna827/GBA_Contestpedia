import { createContext, useContext } from 'react'

import { FileRoute } from '.'

const RouteContext = createContext<Pick<FileRoute, 'key'> | undefined>(undefined)
export const RouteProvider = RouteContext.Provider

export const useRoute = () => useContext(RouteContext)
