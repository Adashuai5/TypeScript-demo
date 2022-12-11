/**
 * Promise.all并发限制
 */

const asyncPool = (
  generator: { (data: unknown): Promise<unknown>; (arg0: any): any },
  params: string | any[],
  maxNum: number
) => {
  const res: any[] = []
  const queue: any[] = []
  let i = 0
  const loop: () => any = async () => {
    if (i === params.length) {
      return Promise.resolve()
    }
    const item = params[i]
    const fn = Promise.resolve().then(() => generator(item))

    res.push(fn)
    queue.push(fn)

    fn.then(() => {
      queue.splice(queue.indexOf(fn), 1)
    })

    i++

    if (i < maxNum) {
      await Promise.resolve()
      return loop()
    } else {
      await Promise.race(queue)
      return loop()
    }
  }
  return loop().then(() => Promise.all(res))
}

const generator = async (data: unknown) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      // console.log(data)
      resolve(data)
    }, 3000 * Math.random())
  })
}

asyncPool(generator, [1, 2, 3, 4, 5, 6, 7, 8, 9], 3).then((res: unknown) =>
  console.log(res)
)
