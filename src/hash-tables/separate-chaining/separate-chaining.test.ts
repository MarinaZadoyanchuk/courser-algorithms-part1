import {SeparateChainingHashST} from './separate-chaining'
import {expect} from 'chai'

describe.only('Separate Chaining Hash Symbol Table', () => {
  const HT = new SeparateChainingHashST(20)

  it('put', () => {
    HT.put(5, '5')
    HT.put(3, '3')
    HT.put(7, '7')
    HT.put(34, '34')
    HT.put(4, '5')
    HT.put(4, '4')
    expect(HT.get(4)).equal('4')
    HT.put(8, '8')
  })

  it('get', () => {
    expect(HT.get(5)).equal('5')
    expect(HT.get(7)).equal('7')
    expect(HT.get(8)).equal('8')
    expect(HT.get(12)).equal(null)
    expect(HT.get('8')).equal(null)
    expect(HT.get(undefined)).equal(null)
  })
})