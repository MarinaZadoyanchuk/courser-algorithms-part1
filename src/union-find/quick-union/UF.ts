import {UF} from '../UF'

export class QuickUnion extends UF {
  n: Number
  id: Array<number>

  constructor(n: number) {
    super(n)
  }

  private findRoot = (node: number) => {
    let parent = this.id[node]
    while(parent !== this.id[parent]) parent = this.id[parent]

    return parent
  }

  // id value defines parent for the node 
  union = (p: number, q: number) => { 
    const pRoot = this.findRoot(p)
    const qRoot = this.findRoot(q)

    this.id[pRoot] = qRoot
  }

  connected = (p: number, q: number) => {
    const pRoot = this.findRoot(p)
    const qRoot = this.findRoot(q)

    return pRoot === qRoot
  }
}