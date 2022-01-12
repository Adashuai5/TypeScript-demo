function LinkedList() {
  function Node(data) {
    this.data = data
    this.next = null
  }

  this.head = null
  this.length = 0

  LinkedList.prototype.toString = () => {
    let current = this.head
    let string = ''

    while (current) {
      string += current.data + ' '
      current = current.next
    }

    return string
  }

  LinkedList.prototype.append = (data) => {
    const newNode = new Node(data)
    if (this.length === 0) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }

    this.length += 1
  }

  LinkedList.prototype.insert = (position, data) => {
    if (!position || position < 0 || position > this.length) return false
    const newNode = new Node(data)

    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let current = this.head
      let n = 0
      let previous = null
      while (n < position) {
        previous = current
        current = current.next
        n++
      }
      previous.next = newNode
      newNode.next = current
    }

    this.length++

    return true
  }

  LinkedList.prototype.get = (position) => {
    if (!position || position < 0 || position > this.length) return null

    let current = this.head
    let n = 0
    let previous = null
    while (n < position) {
      previous = current
      current = current.next
      n++
    }
    return current
  }

  LinkedList.prototype.indexOf = (data) => {
    let current = this.head
    let index = 0
    while (current) {
      if (current.data === data) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  LinkedList.prototype.update = (position, data) => {
    if (!position || position < 0 || position > this.length) return false
    const newNode = new Node(data)

    if (position === 0) {
      newNode.next = this.head.next
      this.head = newNode
    } else {
      let current = this.head
      let n = 0
      while (n < position) {
        current = current.next
        n++
      }
      current.data = data
    }

    return true
  }

  LinkedList.prototype.removeAt = (position) => {
    if (!position || position < 0 || position > this.length) return false
    let current = this.head
    if (position === 0) {
      this.head = this.head.next
    } else {
      let n = 0
      let previous = null
      while (n < position) {
        previous = current
        current = current.next
        n++
      }
      previous.next = current.next
    }

    this.length--

    return current.data
  }

  LinkedList.prototype.remove = (data) => {
    const position = this.indexOf(data)

    return this.removeAt(position)
  }
}

const list = new LinkedList()

list.append('aaa')
list.append('zzz')
list.append('ggg')
list.append('ccc1')

console.log('append', list)
console.log('toString', list.toString())

list.insert(3, '111')
console.log('toString', list.toString())
list.update(2, '222')
console.log('toString', list.toString())
console.log('get', list.get(3))
console.log('indexOf', list.indexOf('222'))
console.log('update', list.update(1, 'abc'))
console.log('toString', list.toString())
console.log('removeAt', list.removeAt(3))
console.log('toString', list.toString())
console.log('remove', list.remove('ccc1'))
console.log('toString', list.toString())
console.log('remove', list.remove('231321'))
console.log('toString', list.toString())
