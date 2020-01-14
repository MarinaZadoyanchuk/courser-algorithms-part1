import {shellSort} from './shellsort'
import {compareNumbers} from '../compares'
import {expect} from 'chai'

describe.only('shell sort', () => {
  it('sort array', () => {
    const expectedRes = [5, 7, 8, 9, 13, 22, 31]
    const input = [8, 22, 7, 9, 31, 5, 13]

    const res = shellSort(input, compareNumbers)

    expect(res).to.eql(expectedRes)
  })

  it('sort empty array', () => {
    const res = shellSort([], compareNumbers)
    expect(res).to.eql([])
  })

  it('sort already sorted array', () => {
    const res = shellSort([1, 2, 3, 4, 5], compareNumbers)
    expect(res).to.eql([1, 2, 3, 4, 5])
  })

  it('sort desc array', () => {
    const res = shellSort([7, 6, 5], compareNumbers)
    expect(res).to.eql([5, 6, 7])
  })
})