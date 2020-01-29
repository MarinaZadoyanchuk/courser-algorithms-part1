export enum colors {red = 'red', black = 'black'}

export class Node<Key, Value> {
  readonly key: Key
  public value: Value
  public leftNode: Node<Key, Value> = null
  public rightNode: Node<Key, Value> = null
  public count: number = 1 // number of nodes in subtree
  public color: colors = colors.black

  constructor(key: Key, value: Value, color: colors = colors.black) {
    this.key = key
    this.value = value
    this.color = color
  }
}

