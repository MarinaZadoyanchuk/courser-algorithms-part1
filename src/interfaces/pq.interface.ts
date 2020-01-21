interface PQ<T> {
  readonly pq: T []
  insert: (v: T) => void
  isEmpty: () => boolean
}

export interface PQMaxInterface<T> extends PQ<T> {
  delMax: () => T
  max: number
}

export interface PQMinInterface<T> extends PQ<T> {
  delMin: () => T
  min: number
}