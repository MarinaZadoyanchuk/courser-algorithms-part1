export enum compareResult {
  more = 1,
  less = -1,
  equals = 0
}

export interface ComparableInterface<T> {
  compareTo: (el: T) => compareResult,
}

