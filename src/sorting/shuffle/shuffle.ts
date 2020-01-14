// shuffle without sort
export function shuffle<T>(array: T []): T [] {
  let i = 0
  while(i < array.length) {
    const r = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[r]
    array[r] = temp
    i++
  }

  return array
}

console.log(shuffle([1, 2, 3, 4]))