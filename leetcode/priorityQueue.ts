function PriorityQueue() {
  this.items = []

  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }

  PriorityQueue.prototype.enqueue = (element, priority) => {
    const queueElement = new QueueElement(element, priority)

    let added = false
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > queueElement.priority) {
        this.items.splice(i, 0, queueElement)
        added = true
        break
      }
    }
    if (!this.items.length || !added) {
      this.items.push(queueElement)
    }
  }

  PriorityQueue.prototype.dequeue = () => {
    return this.items.shift()
  }
  PriorityQueue.prototype.front = () => {
    return this.items[0]
  }
  PriorityQueue.prototype.size = () => {
    return this.items.length
  }
  PriorityQueue.prototype.isEmpty = () => {
    return this.items.length === 0
  }
  PriorityQueue.prototype.toString = () => {
    let string = ''
    for (let i = 0; i < this.items.length; i++) {
      string += this.items[i].element + '-' + this.items[i].priority
    }
    return string
  }
}

const pq = new PriorityQueue()

pq.enqueue('aaa', 1)
pq.enqueue('zzz', 999)
pq.enqueue('ggg', 7)
pq.enqueue('ccc', 3)

console.log('enqueue', pq)
console.log('front', pq.front())
console.log('toString', pq.toString())

pq.dequeue()
pq.dequeue()

console.log('size', pq.size())

pq.dequeue()
pq.dequeue()

console.log('isEmpty', pq.isEmpty())
