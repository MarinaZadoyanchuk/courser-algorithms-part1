import {CompareInterface} from '../compares'
import swap from '../../utils/swap'

export function partition <T>(array: T [], compare: CompareInterface<T>, from = 0, to = array.length - 1): number {
  let i = from
  let j = to + 1
  const pivot = array[from]

  if (j <= i) return j

  while(true) {
    while(compare(pivot, array[++i]) > 0) {
      if (i === to) break
    }
    
    while(compare(array[--j], pivot) > 0 ) {
      if (j === from) break
    }
    if (i >= j) break
    swap(array, i, j)
  }

  swap(array, j, from)

  return j
}
