class ListNode {
  value: string
  next: ListNode = null

  constructor(value) {
    this.value = value
  }

  setNext(node: ListNode | null) {
    this.next = node
  }
}

// stack with linked list
export class Stack {
  private list: ListNode = null

  push(value: string): void {
    const newNode = new ListNode(value)
    newNode.setNext(this.list)
    this.list = newNode
  }

  pop(): string {
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