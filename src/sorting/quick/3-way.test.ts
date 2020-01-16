import {quickSort, sort, partition} from './3-way'
import {shuffle} from '../shuffle/shuffle'
import {compareNumbers} from '../compares'
import {expect} from 'chai'

describe('3-way quicksort', () => {
  describe('partition', () => {
    it ('partition random array', () => {
      const input = [4, 3, 5, 2, 4, 6, 8, 9]
      expect(partition(input, compareNumbers)).to.eql({lt: 2, gt: 3})
    })
  
    it('empty array should be error', () => {
      expect(() => partition([], compareNumbers)).to.throw()
    })
  
    it('sorted array', () => {
      expect(partition([1, 2, 3, 4], compareNumbers)).to.eql({lt: 0, gt: 0})
    })
  
    it('array with equal values', () => {
      expect(partition([3, 1, 4, 3, 4, 3, 1, 3], compareNumbers)).to.eql({lt: 2, gt: 5})
    })
  
    it('reversed array', () => {
      expect(partition([4, 3, 3, 1], compareNumbers)).to.eql({lt: 3, gt: 3})
    })
  })

  describe('sort', () => {
    it('sort subarray', () => {
      const input = [4, 3, 5, 2, 4, 6, 8, 9]
      const expected = [4, 3, ...sort(input.slice(2), compareNumbers, 0, input.length - 3)]

      expect(sort(input, compareNumbers, 2, input.length - 1)).to.eql(expected)
    })

    it('return the same array', () => {
      const input = [4, 3, 5, 2, 4, 6, 8, 9]
      expect(sort(input, compareNumbers, 2, 2)).to.eql(input)
    })

    it('should be exception', () => {
      expect(() => sort([], compareNumbers, 1, 2)).to.throw()
    })
  })

  describe('quick sort', () => {
    it('sort shuffled array', () => {
      const expected = Array(12).fill(0).map((el, index) => index)
      const input = shuffle(expected)
      const result = quickSort(input, compareNumbers)

      expect(result).to.eql(expected)
    })

    it('sort reversed array', () => {
      const expected = Array(12).fill(0).map((el, index) => index)

      expect(quickSort([...expected].reverse(), compareNumbers)).to.eql(expected)
    })

    it('sort empty array', () => {
      expect(quickSort([], compareNumbers)).to.eql([])
    })

    it('sort array with equal values', () => {
      expect(quickSort([2, 1, 2, 3, 4, 2, 1, 2], compareNumbers)).to.eql([1, 1, 2, 2, 2, 2, 3, 4])
    })
  })
})