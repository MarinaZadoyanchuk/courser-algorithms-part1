export class Node<Key, Value> {
  readonly key: Key
  public value: Value
  public leftNode: Node<Key, Value> = null
  public rightNode: Node<Key, Value> = null
  public count: number = 1 // number of nodes in subtree

  constructor(key: Key, value: Value) {
    this.key = key
    this.value = value
  }
}
