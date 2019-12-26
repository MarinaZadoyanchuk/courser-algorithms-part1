class ListNode<Item> {
  value: Item
  next: ListNode<Item> = null

  constructor(value) {
    this.value = value
  }

  setNext(node: ListNode<Item> | null) {
    this.next = node
  }
}

// stack with linked list
export class Stack<Item> {
  private list: ListNode<Item> = null

  push(value: Item): void {
    const newNode = new ListNode<Item>(value)
    newNode.setNext(this.list)
    this.list = newNode
  }

  pop(): Item {
    if (this.isEmpty()) {
      return null
    }

    const value = this.list.value
    this.list = this.list.next
    return value
  }

  isEmpty(): boolean {
    return this.list === null
  }
}