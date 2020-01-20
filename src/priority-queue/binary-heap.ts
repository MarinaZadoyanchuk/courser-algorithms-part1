import swap from '../utils/swap'
import PQMaxInterface from './PQMaxInterface'

export class PQMax implements PQMaxInterface<number> {
  pq: number [] = [,] // starts from 1 

  insert(value: number) {
    this.pq.push(value)

    this.swim(this.pq.length - 1)
  }

  delMax(): number {
    if (this.isEmpty()) {
      throw Error('queue is empty')
    }
    swap(this.pq, 1, this.pq.length - 1)
    const maxValue = this.pq.pop()
    this.sink(1)

    return maxValue
  }

  get max(): number {
    if (this.isEmpty()) {
      throw Error('queue is empty')
    }

    return this.pq[1]
  }

  isEmpty() {
    return this.pq.length === 1
  }


  private swim(k: number) {
    if (this.isEmpty()) {
      return
    }

    let p = k
    while(k > 1 && this.pq[p = Math.floor(k / 2)] < this.pq[k]) { // while parent is smaller than node
      swap(this.pq, p, k)
      k = p
    }
  }

  private sink(k: number) {
    while (k * 2 < this.pq.length) {
      let c = k * 2

      if (c < this.pq.length - 1 && this.pq[c + 1] > this.pq[c]) c++ //select the bigger one
      if (this.pq[k] > this.pq[c]) break;
      swap(this.pq, k, c)
      k = c
    }
  }
}
