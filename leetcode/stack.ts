function Stack() {
  this.items = []
  Stack.prototype.push = (item) => {
    this.items.push(item)
  }
  Stack.prototype.pop = () => {
    return this.items.pop()
  }
  Stack.prototype.peek = () => {
    return this.items[this.items.length - 1]
  }
  Stack.prototype.size = () => {
    return this.items.length
  }
  Stack.prototype.isEmpty = () => {
    return this.items.length === 0
  }
  Stack.prototype.toString = () => {
    return this.items.join('')
  }
}

const stack = new Stack()

stack.push(1)
stack.push(10)
stack.push(100)
stack.push(1000)

console.log('push', stack)
console.log('peek', stack.peek())
console.log('toString', stack.toString())

stack.pop()
stack.pop()

console.log('size', stack.size())

stack.pop()
stack.pop()

console.log('isEmpty', stack.isEmpty())

const dec2bin = (decNumber) => {
  const stack = new Stack()
  while (decNumber > 0) {
    stack.push(decNumber % 2)
    decNumber = Math.floor(decNumber / 2)
  }

  let binNumberString = ''
  while (!stack.isEmpty()) {
    binNumberString += stack.pop()
  }

  return Number(binNumberString)
}

console.log('dec2bin', dec2bin(100))
