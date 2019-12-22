import {QuickUnion as UF} from './UF'
import {expect} from 'chai'

describe('UF quick-union', () => {
  const uf1 = new UF(10)
  uf1.union(3, 4)
  uf1.union(3, 8)
  uf1.union(6, 5)
  uf1.union(9, 4)
  uf1.union(2, 1)
  
  it('8 and 9 are connected', () => {
    expect(uf1.connected(8, 9)).to.equal(true)
  })

  it('5 add 0 are not connected', () => {
    expect(uf1.connected(5, 0)).to.equal(false)
  })

  it('check result', () => {
    uf1.union(5, 0)
    uf1.union(7, 2)
    uf1.union(6, 1)
    expect(uf1.id).to.eql([1, 1, 1, 4, 8, 0, 5, 1, 8, 8])
  })
})
