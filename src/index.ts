import { rootRoute } from '@src/pages/root'
import { build } from '@src/engine/build'

console.time('built ✨')

build(rootRoute)

console.timeEnd('built ✨')
