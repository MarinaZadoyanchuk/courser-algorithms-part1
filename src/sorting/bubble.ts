import {CompareInterface} from './compares'

export function bubbleSort<T>(array: T [], compare: CompareInterface<T>): {array: T [], swapCount: number} {
  let swapped = true
  let swapCount = 0
  while(swapped) {
    swapped = false
    for(let i = 0; i < array.length - 1; i++) {
      if (compare(array[i], array[i + 1]) > 0) {
        swapped = true
        swapCount++
        const temp = array[i]
        array[i] = array[i + 1]
        array[i + 1] = temp
      }
    }
  }
  return {array, swapCount}
}
