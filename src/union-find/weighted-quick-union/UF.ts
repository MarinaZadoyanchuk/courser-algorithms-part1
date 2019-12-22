import {UF} from '../UF'

export class WeightedQuickUnion extends UF {
  n: Number
  id: Array<number>
  private _sz: Array<number>

  constructor(n: number) {
    super(n)
    this._sz = this.id.map(() => 1)
  }

  private findRoot = (node: number) => {
    let parent = this.id[node]
    while(parent !== this.id[parent]) parent = this.id[parent]

    return parent
  }

  // union smaller tree to the large one
  // method to avoid tall tree
  // If you've got a large tree and a small tree to combine together what you want to try to do is avoid putting the large tree lower
  union = (p: number, q: number) => { 
    const pRoot = this.findRoot(p)
    const qRoot = this.findRoot(q)

    if (pRoot === qRoot) return

    if (this._sz[pRoot] < this._sz[qRoot]) {
      this.id[pRoot] = qRoot
      this._sz[qRoot] += this._sz[pRoot]
    } else {
      this.id[qRoot] = pRoot
      this._sz[pRoot] += this._sz[qRoot]
    }
  }

  connected = (p: number, q: number) => {
    const pRoot = this.findRoot(p)
    const qRoot = this.findRoot(q)

    return pRoot === qRoot
  }
}