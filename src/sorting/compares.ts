enum compareResult {
  more = 1,
  less = -1,
  equals = 0
}

export interface CompareInterface<T> {
  (a: T, b: T): compareResult
}

export const compareNumbers:CompareInterface<number>  = function (a: number, b: number){
  if (a > b) {
    return compareResult.more
  }

  if (a < b) {
    return compareResult.less
  }

  return compareResult.equals
}