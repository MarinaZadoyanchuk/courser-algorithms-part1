import {compareResult} from '../interfaces/comparable.interface'

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