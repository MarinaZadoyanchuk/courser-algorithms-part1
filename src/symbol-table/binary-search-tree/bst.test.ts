import {BST} from './bst'
import { ComparableInterface } from '../../interfaces/comparable.interface'
import {shuffle} from '../../sorting/shuffle/shuffle'
import {expect} from 'chai'

class ComparableString extends String implements ComparableInterface<String> {
  private str: String

  constructor(str: String) {
    super(str)
    this.str = str
  }

  compareTo(another: String) {
    if (this.str > another) {
      return 1
    }

    if (this.str < another) {
      return -1
    }

    return 0
  }
}

describe('Binary Search Tree', () => {
  const bst = new BST<ComparableString, String>()
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

    expect(bst.size()).equal(10)

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