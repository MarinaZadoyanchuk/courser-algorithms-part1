import {getValueHashCode} from '../hash-functions'

class Node {
  public key: Object
  public value: Object
  public next: Node

  constructor(key: Object, value: Object, next: Node = null)  {
    this.key = key
    this.value = value
    this.next = next
  }
}

// hash symbol table
export class SeparateChainingHashST<Key, Value> {
  private st: Node []
  private M: number
  constructor(n) {
    this.M = n / 5
    this.st = new Array(this.M)
  }

  private getHash(key: Key) {
    try {
      const hashCode = getValueHashCode(key)

      return Math.abs(hashCode) % this.M
    } catch(error) {
      // console.error(error)

      return null
    }
  }

  private getNode(hash: number, key: Key): Node {
    let node = this.st[hash]

    while(node) {
      if (Object.is(node.key, key)) {
        return node
      }
      node = node.next
    }

    return null
  }

  public get(key: Key): Value {
    const h = this.getHash(key)

    if (h === null) {
      return null
    }

    const node = this.getNode(h, key)

    return node ? node.value as Value : null
  }


  public put(key: Key, value: Value) {
    const h = this.getHash(key)

    if (h === null) {
      return null
    }

    const node = this.getNode(h, key)

    if (node) {
      node.value = value
    } else {
      this.st[h] = new Node(key, value, this.st[h])
    }
  }
}