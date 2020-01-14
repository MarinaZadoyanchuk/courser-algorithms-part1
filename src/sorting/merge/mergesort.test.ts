import {merge, isSorted, mergeSort} from './mergesort'
import {shuffle} from '../shuffle/shuffle'
import {compareNumbers} from '../compares'
import {expect} from 'chai'

describe.only('mergesort', () => {
  describe('merge', () => {
    it('works with empty arrays', () => {
      expect(merge([], [], compareNumbers)).to.eql([])
    })
  
    it('merge two sorted arrays', () => {
      expect(merge([1, 7], [5, 6], compareNumbers)).to.eql([1, 5, 6, 7])
    })
  
    it('merge two sorted arrays with equal values', () => {
      expect(merge([1, 5, 6, 7], [5, 6], compareNumbers)).to.eql([1, 5, 5, 6, 6, 7])
    })
  
    it('merge arrays with one empty', () => {
      expect(merge([1, 7], [], compareNumbers)).to.eql([1, 7])
    })
  })

  describe('isSorted', () => {
    it('empty array is sorted', () => {
      expect(isSorted([], compareNumbers)).equal(true)
    })

    it('array of equal values is sorted', () => {
      expect(isSorted([1, 1, 1], compareNumbers)).equal(true)
    })

    it('sorted array', () => {
      expect(isSorted([1, 12, 24], compareNumbers)).equal(true)
    })

    it('not sorted array', () => {
      expect(isSorted([1, 12, 11], compareNumbers)).equal(false)
    })
  })

  describe('merge sort', () => {
    const expected = Array(12).fill(0).map((el, index) => index)


    it('sort array 1', () => {
      expect(mergeSort(shuffle(expected), compareNumbers)).to.eql(expected)
    })

    it('sort array 2', () => {
      expect(mergeSort(shuffle(expected), compareNumbers)).to.eql(expected)
    })

    it('sort already sorted array', () => {
      expect(mergeSort(expected, compareNumbers)).to.eql(expected)
    })

    it('sort empty array', () => {
      expect(mergeSort([], compareNumbers)).to.eql([])
    })
  })
})
