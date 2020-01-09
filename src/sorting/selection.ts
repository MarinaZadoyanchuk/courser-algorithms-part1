import {CompareInterface} from './compares'
export function selectionSort<T>(array: T [], compare: CompareInterface<T>): T [] {
  let i = 0

  while(i < array.length) {
    let min = i
    let j = i
    
    while (j < array.length) {
      if (compare(array[j], array[min]) < 0) {
        min = j
      }
      j++
    }

    const temp = array[i]
    array[i] = array[min]
    array[min] = temp
    i++
  }
  
  return array
}