import {strict as assert} from 'assert'
import {ComparableInterface} from '../../interfaces/comparable.interface'
import {BST} from '../binary-search-tree/bst'
import {colors, Node} from '../node'

export class RedBlackBST<Key extends ComparableInterface<Key>, Value> extends BST<Key, Value> {
  public put(key: Key, value: Value) {
    this.root = this.innerPut(this.root, key, value)
    this.root.color = colors.black // root is always black
  }

  innerPut(x: Node<Key, Value>, key: Key, value: Value): Node<Key, Value> {
    if (x === null) return new Node(key, value, colors.red)

    const cmp = key.compareTo(x.key)

    if (cmp < 0) x.leftNode = this.innerPut(x.leftNode, key, value)
    else if (cmp > 0) x.rightNode = this.innerPut(x.rightNode, key, value)
    else x.value = value
    
    if (this.isRed(x.rightNode) && !this.isRed(x.leftNode)) x = this.rotateLeft(x)
    if (this.isRed(x.leftNode) && this.isRed(x.leftNode.leftNode)) x = this.rotateRight(x)
    if (this.isRed(x.leftNode) && this.isRed(x.rightNode)) this.flipColors(x)

    x.count = 1 + this.getNodeSize(x.leftNode) + this.getNodeSize(x.rightNode)
    return x
  }

  private isRed(x: Node<Key, Value>): boolean {
    if (x === null) return false

    return x.color === colors.red
  }

  private rotateLeft(x: Node<Key, Value>): Node<Key, Value> {
    assert(this.isRed(x.rightNode))

    const newLeft = x
    x = newLeft.rightNode
    newLeft.rightNode = x.leftNode
    x.leftNode = newLeft
    x.color = newLeft.color
    newLeft.color = colors.red

    return x
  }


  private rotateRight(x: Node<Key, Value>): Node<Key, Value> {
    assert(this.isRed(x.leftNode))

    const newRight = x
    x = newRight.leftNode
    newRight.leftNode = x.rightNode
    x.rightNode = newRight
    x.color = newRight.color
    newRight.color = colors.red

    return x
  }

  private flipColors(x: Node<Key, Value>) {
    assert(!this.isRed(x))
    assert(this.isRed(x.leftNode))
    assert(this.isRed(x.rightNode))

    x.leftNode.color = colors.black
    x.rightNode.color = colors.black
    x.color = colors.red
  }
}