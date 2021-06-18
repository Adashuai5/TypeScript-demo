const asyncPool = (generator, params, maxNum) => {
  const res = []
  const queue = []

  let i = 0

  const loop = () => {
    if (i === params.length) {
      return Promise.resolve()
    }

    const item = params[i]
    const fn = Promise.resolve().then(() => generator(item))

    queue.push(fn)
    res.push(fn)

    fn.then(() => {
      queue.splice(queue.indexOf(fn), 1)
    })

    i++

    let r

    if (i < maxNum) {
      r = Promise.resolve()
    } else {
      r = Promise.race(queue)
    }

    return r.then(() => loop())
  }

  return loop().then(() => Promise.all(res))
}

const generator = async (data) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      console.log(data)
      resolve(data)
    }, 1000)
  })
}

asyncPool(generator, [1, 2, 3, 4, 5, 6], 3).then((res) => console.log(res))
