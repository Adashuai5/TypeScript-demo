class EventHub {
  private catch: { [key: string]: Array<(data: unknown) => void> } = {}
  on(eventName: string, fn: (data: unknown) => void) {
    this.catch[eventName] = this.catch[eventName] || []
    this.catch[eventName].push(fn)
  }
  emit(eventName: string, data?: unknown) {
    ;(this.catch[eventName] || []).forEach((fn) => fn(data))
  }
  off(eventName: string, fn: (data: unknown) => void) {
    let index = this.catch[eventName].indexOf(fn)
    if (index === -1) return
    this.catch[eventName].splice(index, 1)
  }
  once(eventName: string, fn: (data: unknown) => void) {
    const onceHandler = (...args: any[]) => {
      fn(args)
      this.off(eventName, fn)
    }
    this.on(eventName, onceHandler)
  }
}

export default EventHub

/**
 * 帮助函数 indexOf
 * @param array
 * @param item
 */

function indexOf(array: string | any[], item: any) {
  if (array === undefined) {
    return -1
  }
  let index = -1
  for (let i = 0; array.length; i++) {
    if (array[i] === item) {
      index = i
    }
  }
  return index
}
