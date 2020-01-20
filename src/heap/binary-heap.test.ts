import {PQMax, PQMin} from './binary-heap'
import {expect} from 'chai'

describe('priority queue binary heap implementation', () => {
  describe('PQ max', () => {
    const pq = new PQMax()
    it('should be error for delete from empty queue', () => {
      expect(() => {pq.delMax()}).to.throw('queue is empty')
      expect(() => pq.max).to.throw('queue is empty')
    })

    it('check pq', () => {
      pq.insert(1)
      pq.insert(7)
      pq.insert(3)
      expect(pq.pq).to.eql([,7, 1, 3])

      pq.insert(13)
      pq.insert(8)
      pq.insert(2)
      expect(pq.pq).to.eql([,13, 8, 3, 1, 7, 2])
    })

    it('get max', () => {
      expect(pq.max).eql(13)
      expect(pq.pq).to.eql([,13, 8, 3, 1, 7, 2])
    })
    
    it('delMax', () => {
      expect(pq.delMax()).eql(13)
      expect(pq.pq).to.eql([, 8, 7, 3, 1, 2])
      expect(pq.delMax()).eql(8)
      expect(pq.pq).to.eql([, 7, 2, 3, 1])
      expect(pq.delMax()).eql(7)
      expect(pq.pq).to.eql([, 3, 2, 1])
      expect(pq.delMax()).eql(3)
      expect(pq.pq).to.eql([, 2, 1])
      expect(pq.delMax()).eql(2)
      expect(pq.pq).to.eql([, 1])
      expect(pq.delMax()).eql(1)
    })

    it('queue is empty', () => {
      expect(pq.isEmpty()).eql(true)
      expect(() => pq.delMax()).to.throw('queue is empty')
      expect(() => pq.max).to.throw('queue is empty')
    })
  })


  describe('PQ Min', () => {
    const pq = new PQMin()

    it('insert', () => {
      pq.insert(1)
      pq.insert(2)
      pq.insert(-1)
      expect(pq.pq).to.eql([, -1, 2, 1])
    })

    it('del min', () => {
      expect(pq.delMin()).equal(-1)
      expect(pq.pq).to.eql([, 1, 2])
    })
  })
})