function Queue() {
  this.items = []
  Queue.prototype.enqueue = (item) => {
    this.items.push(item)
  }
  Queue.prototype.dequeue = () => {
    return this.items.shift()
  }
  Queue.prototype.front = () => {
    return this.items[0]
  }
  Queue.prototype.size = () => {
    return this.items.length
  }
  Queue.prototype.isEmpty = () => {
    return this.items.length === 0
  }
  Queue.prototype.toString = () => {
    return this.items.join('')
  }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(10)
queue.enqueue(100)
queue.enqueue(1000)

console.log('enqueue', queue)
console.log('front', queue.front())
console.log('toString', queue.toString())

queue.dequeue()
queue.dequeue()

console.log('size', queue.size())

queue.dequeue()
queue.dequeue()

console.log('isEmpty', queue.isEmpty())

// 击鼓传花
const drinkingGame = (list, number) => {
  const queue = new Queue()
  list.forEach((element) => {
    queue.enqueue(element)
  })

  while (queue.size() > 1) {
    for (let i = 0; i < number - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    queue.dequeue()
  }
  return list.indexOf(queue.front())
}

console.log('drinkingGame', drinkingGame([1, 2, 3, 4], 3))
