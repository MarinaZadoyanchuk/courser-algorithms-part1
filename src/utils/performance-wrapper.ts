export default function performanceWrapper(fn: Function) {
  return function (...args) {
    const start = Date.now()

    const result = fn.apply(this, args)

    const end = Date.now()


    console.log(`Function ${fn.name} was running ${end - start}ms`)

    return result
  }
}