import {ComparableInterface} from '../../interfaces/comparable.interface'
import STInterface from '../../interfaces/st.interface'
import {Node, colors} from '../node'

export class BST<Key extends ComparableInterface<Key>, Value> implements STInterface<Key, Value> {
  protected root: Node<Key, Value> = null

  public put(key: Key, value: Value) {
    this.root = this.innerPut(this.root, key, value)
  }

  protected innerPut(x: Node<Key, Value>, key: Key, value: Value, color: colors = colors.black): Node<Key, Value> {
    if (x === null) return new Node(key, value, color)

    const cmp = key.compareTo(x.key)

    if (cmp < 0) x.leftNode = this.innerPut(x.leftNode, key, value)
    else if (cmp > 0) x.rightNode = this.innerPut(x.rightNode, key, value)
    else x.value = value
    x.count = 1 + this.getNodeSize(x.leftNode) + this.getNodeSize(x.rightNode)

    return x
  }

  public get(key: Key): Value {
    let x = this.root

    while(x != null) {
      const cmp = key.compareTo(x.key)
      if (cmp < 0) {
        x = x.leftNode
      } else if (cmp > 0) {
        x = x.rightNode
      } else {
        return x.value
      }
    }

    return null
  }

  public contains(key: Key): boolean {
    return this.get(key) !== null
  }

  public isEmpty(): boolean {
    return this.root === null
  }

  public delete(key: Key) {
    this.root = this.innerDelete(this.root, key)
  }

  // Hibbard deletion
  private innerDelete(x: Node<Key, Value>, key): Node<Key, Value> {
    if (x === null) return null

    const cmp = key.compareTo(x.key)

    if (cmp < 0) {
      x.leftNode = this.innerDelete(x.leftNode, key)
    } else if (cmp > 0) {
      x.rightNode = this.innerDelete(x.rightNode, key)
    } else {
      // cases if child one => reassign the node to child
      if (x.rightNode === null) return x.leftNode
      if (x.leftNode === null) return x.rightNode
      
      // if node has two children
      const t = x
      x = this.min(x) // set x to min of right subtree: larger min then deleted node
      x.rightNode = this.innerDeleteMin(t) // update right tree without min
      x.leftNode = t.leftNode // set old left tree
    }

    x.count = 1 + this.getNodeSize(x.leftNode) + this.getNodeSize(x.rightNode)

    return x
  }

  private min(x: Node<Key, Value>): Node<Key, Value> {
    if (x === null) return x

    while(x.leftNode) {
      x = x.leftNode
    }

    return x
  }

  public deleteMin() {
    if (this.isEmpty()) {
      throw Error('tree is empty')
    }

    this.root = this.innerDeleteMin(this.root)
  }

  private innerDeleteMin(x: Node<Key, Value>): Node<Key, Value> {
    if (x.leftNode === null) return x.rightNode // x is the most left node

    x.leftNode = this.innerDeleteMin(x.leftNode) // for prev to the most left set right node
    x.count = 1 + this.getNodeSize(x.leftNode) + this.getNodeSize(x.rightNode)

    return x
  }

  public deleteMax() {
    if (this.isEmpty()) {
      throw Error('tree is empty')
    }

    this.root = this.innerDeleteMax(this.root)
  }

  private innerDeleteMax(x: Node<Key, Value>): Node<Key, Value> {
    if (x.rightNode === null) return x.leftNode

    x.rightNode = this.innerDeleteMax(x.rightNode)
    x.count = 1 + this.getNodeSize(x.leftNode) + this.getNodeSize(x.rightNode)

    return x
  }

  public keys(): Key []  {
    return this.inorder(this.root)
  }

  // inorder traversal
  private inorder(x: Node<Key, Value>, acc = []): Key [] {
    if (x === null) return acc
    this.inorder(x.leftNode, acc)
    acc.push(x.key)
    this.inorder(x.rightNode, acc)
  
    return acc
  }

  public size(): number {
    return this.getNodeSize(this.root)
  }

  protected getNodeSize(x: Node<Key, Value>): number {
    if (x === null) return 0

    return x.count
  }

  public floor(key: Key): Key {
    const floorNode = this.innerFloor(this.root, key)

    return floorNode && floorNode.key // null || key of node
  }

  private innerFloor(x: Node<Key, Value>, key: Key): Node<Key, Value> {
    if (x === null) return null

    const cmp = key.compareTo(x.key)

    if (cmp === 0) return x

    if (cmp < 0) return this.innerFloor(x.leftNode, key)

    return this.innerFloor(x.rightNode, key) || x // if node in right subtree is null, return root
  }

  public rank(key: Key): number {
    return this.innerRank(this.root, key)
  }

  private innerRank(x: Node<Key, Value>, key): number {
    if (x === null) return 0

    const cmp = key.compareTo(x.key)

    if (cmp < 0) return this.innerRank(x.leftNode, key)
    if (cmp > 0) return 1 + this.getNodeSize(x.leftNode) + this.innerRank(x.rightNode, key)

    return this.getNodeSize(x.leftNode)
  }
}