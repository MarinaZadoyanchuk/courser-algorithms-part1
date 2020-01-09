export function bubbleSort(array: Array<number>) {
  let swapped = true
  let swapCount = 0
  while(swapped) {
    swapped = false
    for(let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
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
