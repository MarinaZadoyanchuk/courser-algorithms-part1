// https://www.geeksforgeeks.org/shellsort/
// step 3x + 1

import {CompareInterface} from '../compares'

export const getNextH: (h: number) => number = h => h * 3 + 1

export function shellSort<T>(array: T [], compare: CompareInterface<T>): T [] {
  let h = 1
  const N = array.length
  // define h for input
  while(h < Math.floor(N / 3)) {
    h = getNextH(h)
  }

  while(h > 0) {
    let i = h
    while(i < N) {
      let j = i
      while (j >= h) {
        const nextJ = j - h
        if (compare(array[nextJ], array[j]) > 0) {
          const temp = array[j]
          array[j] = array[nextJ]
          array[nextJ] = temp
        }
        j = nextJ
      }
      i++
    }
    h = Math.floor(h / 3)
  }

  return array
}