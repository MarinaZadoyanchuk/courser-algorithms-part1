import {CompareInterface} from '../compares'
import {shuffle} from '../shuffle/shuffle'
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

export function sort<T>(array: T [], compare: CompareInterface<T>, from: number, to: number): T [] {
  if (to >= array.length || from < 0) {
    throw Error(`incorrect 'from' or 'to' arguments`)
  }
  if (to <= from) return array
  const j = partition(array, compare, from, to)

  sort(array, compare, from, j - 1)
  sort(array, compare, j + 1, to)

  return array
}

export function quickSort<T>(array: T [], compare: CompareInterface<T>): T [] {
  const shuffled = shuffle(array)


  return sort(shuffled, compare, 0, shuffled.length - 1)
}