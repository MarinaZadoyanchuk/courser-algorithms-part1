// shuffle without sort
export function shuffle<T>(array: T []): T [] {
  let i = 0
  const shuffled = [...array]
  while(i < shuffled.length) {
    const r = Math.floor(Math.random() * (i + 1))
    const temp = shuffled[i]
    shuffled[i] = shuffled[r]
    shuffled[r] = temp
    i++
  }

  return shuffled
}