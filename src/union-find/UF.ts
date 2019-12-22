export class UF {
  n: Number
  id: Array<number>

  constructor(n: number) {
    this.n = n
    let id:Array<Number>=new Array(n)
    id.fill(0)
    this.id = id.map((item, index) => index)
  }

  union = (p: number, q: number) => {
    const pId = this.id[p]
    const qId = this.id[q]

    if (this.connected(p, q)) {
      return
    }

    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pId) {
        this.id[i] = qId
      }
    }
  }

  connected = (p: number, q: number) => this.id[p] === this.id[q]
}