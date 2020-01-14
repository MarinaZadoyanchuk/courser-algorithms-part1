import {bubbleSort} from './bubble'
import {compareNumbers} from '../compares'
import performanceWrapper from '../../utils/performance-wrapper'
import {expect} from 'chai'

// const logBubbleSort = performanceWrapper(bubbleSort)

describe('bubble sort', () => {
  it('sort array', () => {
    const expectedRes = [5, 7, 8, 9, 13, 22, 31]
    const input = [8, 22, 7, 9, 31, 5, 13]

    const res = bubbleSort(input, compareNumbers)

    expect(res.array).to.eql(expectedRes)
    expect(res.swapCount).to.equal(10)
  })

  it('sort empty array', () => {
    const res = bubbleSort([], compareNumbers)
    expect(res.array).to.eql([])
    expect(res.swapCount).to.equal(0)
  })

  it('sort already sorted array', () => {
    const res = bubbleSort([1, 2, 3, 4, 5], compareNumbers)
    expect(res.array).to.eql([1, 2, 3, 4, 5])
    expect(res.swapCount).to.equal(0)
  })

  // the worth case
  it('sort desc array', () => {
    const res = bubbleSort([7, 6, 5, 4, 3, 2, 1], compareNumbers)
    expect(res.array).to.eql([1, 2, 3, 4, 5, 6, 7])
    expect(res.swapCount).to.equal(21)
  })
})