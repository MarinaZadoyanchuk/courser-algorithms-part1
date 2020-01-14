import {selectionSort} from './selection'
import {compareNumbers} from '../compares'
import {expect} from 'chai'

describe('selection sort', () => {
  it('sort array', () => {
    const expectedRes = [5, 7, 8, 9, 13, 22, 31]
    const input = [8, 22, 7, 9, 31, 5, 13]

    const res = selectionSort(input, compareNumbers)

    expect(res).to.eql(expectedRes)
  })

  it('sort empty array', () => {
    const res = selectionSort([], compareNumbers)
    expect(res).to.eql([])
  })

  it('sort already sorted array', () => {
    const res = selectionSort([1, 2, 3, 4, 5], compareNumbers)
    expect(res).to.eql([1, 2, 3, 4, 5])
  })

  it('sort desc array', () => {
    const res = selectionSort([7, 6, 5, 4, 3, 2, 1], compareNumbers)
    expect(res).to.eql([1, 2, 3, 4, 5, 6, 7])
  })
})