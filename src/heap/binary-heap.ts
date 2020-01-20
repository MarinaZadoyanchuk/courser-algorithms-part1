import swap from '../utils/swap'
import {PQMaxInterface, PQMinInterface} from './PQInterfaces'

export class Heap {
  pq: number [] = [,] // starts from 1

  isEmpty() {
    return this.pq.length === 1
  }

  swim(k: number, multiplier = 1) {
    if (this.isEmpty()) {
      return
    }

    let p = k
    while(k > 1 && multiplier * this.pq[p = Math.floor(k / 2)] < multiplier * this.pq[k]) { // while parent is smaller than node
      swap(this.pq, p, k)
      k = p
    }
  }

  sink(k: number, multiplier = 1) {
    while (k * 2 < this.pq.length) {
      let c = k * 2

      if (c < this.pq.length - 1 && multiplier * this.pq[c + 1] > multiplier * this.pq[c]) c++ //select the bigger one
      if (multiplier * this.pq[k] > multiplier * this.pq[c]) break;
      swap(this.pq, k, c)
      k = c
    }
  }
}

export class PQMax extends Heap implements PQMaxInterface<number> {
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
}

export class PQMin extends Heap implements PQMinInterface<number> {
  insert(value: number) {
    this.pq.push(value)

    this.swim(this.pq.length - 1, -1)
  }

  delMin(): number {
    if (this.isEmpty()) {
      throw Error('queue is empty')
    }
    swap(this.pq, 1, this.pq.length - 1)
    const maxValue = this.pq.pop()
    this.sink(1, -1)

    return maxValue
  }

  get min(): number {
    if (this.isEmpty()) {
      throw Error('queue is empty')
    }

    return this.pq[1]
  }
}