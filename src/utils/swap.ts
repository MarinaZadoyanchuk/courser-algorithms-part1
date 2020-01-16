export default function swap<T>(array: T [], i, j): T [] {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp

  return array
}