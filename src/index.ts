import { build } from './engine/build'
import { rootRoute } from './pages/root'

console.time('built ✨')

build(rootRoute)

console.timeEnd('built ✨')
