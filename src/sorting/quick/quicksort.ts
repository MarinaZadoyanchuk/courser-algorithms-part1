import {CompareInterface} from '../compares'
import {shuffle} from '../shuffle/shuffle'
import {partition} from './partition'

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