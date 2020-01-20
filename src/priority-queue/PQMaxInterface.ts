export default interface PQMax<T> {
  readonly pq: T []
  insert: (v: T) => void
  delMax: () => T
  isEmpty: () => boolean
}