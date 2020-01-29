import {RedBlackBST} from './red-black-bst'
import {ComparableString} from '../comparable-string'
import {shuffle} from '../../sorting/shuffle/shuffle'
import {expect} from 'chai'

describe('Read Black BST', () => {
  const bst = new RedBlackBST<ComparableString, String>()
  it('put, get and contains value', () => {
    expect(bst.size()).equal(0)
    expect(bst.get(new ComparableString('key1'))).equal(null)
    expect(bst.contains(new ComparableString('key1'))).equal(false)
    bst.put(new ComparableString('key1'), 'value1')
    expect(bst.size()).equal(1)
    expect(bst.get(new ComparableString('key1'))).equal('value1')
    expect(bst.get(new ComparableString('key'))).equal(null)
    expect(bst.contains(new ComparableString('key1'))).equal(true)
    expect(bst.contains(new ComparableString('key'))).equal(false)
    bst.put(new ComparableString('key1'), 'value')
    expect(bst.get(new ComparableString('key1'))).equal('value')
  })

  it('isEmpty, delete', () => {
    expect(bst.isEmpty()).equal(false)
    bst.delete(new ComparableString('key1'))
    expect(bst.size()).equal(0)
    expect(bst.get(new ComparableString('key1'))).equal(null)
    expect(bst.isEmpty()).equal(true)
  })

  it('keys', () => {
    expect(bst.keys()).eql([])

    const init = Array(10).fill(0).map((el, index) => index)

    shuffle(init).forEach((el) => {
      bst.put(new ComparableString(`key${el}`), `value${el}`)
    })

    expect(bst.keys()).eql(init.map((el) => new ComparableString(`key${el}`)))
  })

  it('floor', () => {
    expect(bst.floor(new ComparableString('key3'))).eql(new ComparableString('key3'))
  })

  it('rank', () => {
    expect(bst.rank(new ComparableString('key3'))).equal(3)
    expect(bst.rank(new ComparableString('key0'))).equal(0)
  })
})