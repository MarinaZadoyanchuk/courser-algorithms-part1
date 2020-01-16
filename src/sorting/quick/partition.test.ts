import {partition} from './partition'
import {compareNumbers} from '../compares'
import {expect} from 'chai'

describe('partition', () => {
  it ('partition random array', () => {
    const input = [4, 3, 5, 2, 4, 6, 8, 9]
    expect(partition(input, compareNumbers)).to.eql(3)
  })

  it('empty array', () => {
    expect(partition([], compareNumbers)).to.eql(0)
  })

  it('sorted array', () => {
    expect(partition([1, 2, 3, 4], compareNumbers)).equal(0)
  })

  it('array with equal values', () => {
    expect(partition([3, 1, 4, 3, 4, 3, 1, 3], compareNumbers)).equal(4)
  })

  it('reversed array', () => {
    expect(partition([4, 3, 3, 1], compareNumbers)).equal(3)
  })
})