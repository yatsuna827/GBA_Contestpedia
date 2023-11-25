import { build } from '@engine'

import { rootRoute } from './pages/root'

console.time('built ✨')

build(rootRoute)

console.timeEnd('built ✨')
