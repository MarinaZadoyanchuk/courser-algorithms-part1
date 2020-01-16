import {CompareInterface} from '../compares'
import {shuffle} from '../shuffle/shuffle'
import swap from '../../utils/swap'

// 3-way partition
export function partition <T>(array: T [], compare: CompareInterface<T>, from = 0, to = array.length - 1): {lt: number, gt: number} {
  if (from > to) {
    throw Error(`wrong 'from' or 'to' or both arguments`)
  }

  let i = from
  let lt = from // left end of equal values to pivot
  let gt = to // right end of equal values to pivot
  const pivot = array[from]
  while(i <= gt) {
    if (compare(array[i], pivot) < 0) {
      swap(array, lt++, i++)
    } else if (compare(array[i], pivot) > 0) {
      swap(array, gt--, i)
    } else {
      i++
    }
  }

  return {lt, gt}
}

export function sort<T>(array: T [], compare: CompareInterface<T>, from: number, to: number): T [] {
  if (from < 0 || to >= array.length) {
    throw Error(`incorrect 'from' or 'to' arguments`)
  }
  if (from >= to) return array

  const {lt, gt} = partition(array, compare, from, to)

  sort(array, compare, from, lt - 1)
  sort(array, compare, gt + 1, to)

  return array
}

export function quickSort<T>(array: T [], compare: CompareInterface<T>): T [] {
  const shuffled = shuffle(array)


  return sort(shuffled, compare, 0, shuffled.length - 1)
}