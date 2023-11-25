import { createContext, useContext } from 'react'

import type { PathStore } from './types'

const PathStoreContext = createContext<PathStore>({})
export const PathStoreProvider = PathStoreContext.Provider

export const usePathStore = () => useContext(PathStoreContext)
