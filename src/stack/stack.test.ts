import {Stack} from './Stack'
import {expect} from 'chai'

describe('linked-list implementation stack', () => {
  const stack = new Stack()

  it('in the start, stack should be empty', () => {
    expect(stack.isEmpty()).to.be.equal(true)
  })

  it('second, then first should be popped', () => {
    stack.push('first')
    stack.push('second')
    expect(stack.pop()).to.be.equal('second', 'second popped')
    expect(stack.pop()).to.be.equal('first', 'first popped')
  })

  it('should be empty again', () => {
    expect(stack.isEmpty()).to.be.equal(true)
  })
})
