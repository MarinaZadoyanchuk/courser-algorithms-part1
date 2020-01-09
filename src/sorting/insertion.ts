import {CompareInterface} from './compares'

export function insertionSort<T>(array: T [], compare: CompareInterface<T>): T [] {
  let i = 1
  while (i < array.length) {
    let j = i
    while (j > 0) {
      if (compare(array[j], array[j - 1]) < 0) {
        const temp = array[j - 1]
        array[j - 1] = array[j]
        array[j] = temp
      } else {
        break;
      }
      j--
    }

    i++
  }

  return array
}