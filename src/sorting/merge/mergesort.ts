import {strict as assert} from 'assert'
import {CompareInterface, compareNumbers} from '../compares'
import {insertionSort} from '../insertion/insertion'

const CUTOFF = 7

export function isSorted<T>(array: T [], compare: CompareInterface<T>): boolean {
  for (let i = 0; i < array.length - 1; i++) {
    if (compare(array[i], array[i + 1]) > 0) {
      return false
    }
  }

  return true
}

export function merge<T>(array1: T [], array2: T [], compare: CompareInterface<T>): T [] {
  assert(isSorted(array1, compare), 'array1 is not sorted')
  assert(isSorted(array1, compare), 'array2 is not sorted')

  const N1 = array1.length
  const N2 = array2.length

  // merge without loop by two arrays
  if (N1 === 0 || N2 === 0 || array1[N1 - 1] <= array2[0]) {
    return [...array1, ...array2]
  }

  const result = []
  let i = 0
  let j = 0

  while (i < N1 || j < N2) {
    if (i < N1 && compare(array1[i], array2[j]) <= 0) {
      result.push(array1[i])
      i++
    } else if (j < N2) {
      result.push(array2[j])
      j++
    }
  }

  assert(isSorted(result, compare), 'result after merge should be sorted')

  return result
}

export function mergeSort<T>(array: T [], compare: CompareInterface<T>): T [] {
  // some improvement
  // for small arrays mergesort has too much overhead
  // use insertion sort for array less than CUTOFF
  if (array.length <= CUTOFF) {
    console.log('insertion sort used')
    return insertionSort(array, compare)
  }

  const mid = Math.floor((array.length + 1) / 2)
  
  const sorted1 = mergeSort(array.slice(0, mid), compare)
  const sorted2 = mergeSort(array.slice(mid, array.length), compare)

  return merge(sorted1, sorted2, compare)
}