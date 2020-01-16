import {CompareInterface} from '../compares'
import {partition} from './partition'
import {shuffle} from '../shuffle/shuffle'
import {strict as assert} from 'assert'

export function quickSelection<T>(array: T [], k, compare: CompareInterface<T>): T {
  const shuffled = shuffle(array)
  let from = 0
  let to = array.length - 1

  if (k > to || k < from) {
    throw Error('index is out range of the array')
  }

  while(from <= to) {
    const j = partition(shuffled, compare, from, to)
    if(j < k) {
      from = j + 1
    } else if (j > k) {
      to = j - 1
    } else return shuffled[k]
  }

  return shuffled[k]
}
