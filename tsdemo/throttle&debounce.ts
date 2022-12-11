// 节流
const throttle = (fn, delay) => {
  let timer
  return (...args) => {
    if (timer) return
    fn.call(this, args)
    timer = setTimeout(() => {
      timer = null
    }, delay)
  }
}

const f = throttle(() => {
  console.log('hi')
}, 3000)
f() // 打印 hi
f() // 技能冷却中

// 防抖
const debounce = (fn, delay) => {
  let timer
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.call(this, args)
      timer = null
    }, delay)
  }
}



const f2 = debounce(() => {
  console.log('hi,f2')
}, 3000)
f2() // 打印 hi
f2() // 技能冷却中
