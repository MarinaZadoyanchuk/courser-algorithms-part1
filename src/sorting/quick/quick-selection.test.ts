import {compareNumbers} from '../compares'
import {quickSelection} from './quick-selection'
import {expect} from 'chai'

describe.only('quickSelection', () => {
  it('get kth sorted element', () => {
    const input = [1, 2, 3, 4, 5, 6, 7]
    expect(quickSelection(input, 3, compareNumbers)).equals(4)
  })

  it('get kth element', () => {
    const input = [1, 2, 1, 2, 1, 2, 1, 2]
    expect(quickSelection(input, 3, compareNumbers)).equals(1)
  })

  it('get kth element of big array', () => {
    const input = new Array(100000).fill(0).map((el, index) => index)
    expect(quickSelection(input, 105, compareNumbers)).equals(105)
  })

  it('get kth element out of array', () => {
    expect(() => quickSelection([], 105, compareNumbers)).to.throw()
    expect(() => quickSelection([], -1, compareNumbers)).to.throw()
  })

})