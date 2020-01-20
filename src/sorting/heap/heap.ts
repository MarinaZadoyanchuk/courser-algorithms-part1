import {PQMin} from '../../heap/binary-heap'

// not in-place implementation
export function heapSort(array: number []): number [] {
  const PQ = new PQMin()
  array.forEach(el => PQ.insert(el))

  let i = 0

  while(!PQ.isEmpty()) {
    array[i] = PQ.delMin()
    i++
  }

  return array
}