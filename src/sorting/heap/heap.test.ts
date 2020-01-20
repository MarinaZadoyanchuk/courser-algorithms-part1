import {heapSort} from './heap'
import {expect} from 'chai'

describe('heap sort', () => {
  it('sort array', () => {
    const expectedRes = [5, 7, 8, 9, 13, 22, 31]
    const input = [8, 22, 7, 9, 31, 5, 13]

    const res = heapSort(input)

    expect(res).to.eql(expectedRes)
  })

  it('sort empty array', () => {
    const res = heapSort([])
    expect(res).to.eql([])
  })

  it('sort already sorted array', () => {
    const res = heapSort([1, 2, 3, 4, 5])
    expect(res).to.eql([1, 2, 3, 4, 5])
  })

  it('sort desc array', () => {
    const res = heapSort([7, 6, 5, 4, 3, 2, 1])
    expect(res).to.eql([1, 2, 3, 4, 5, 6, 7])
  })
})