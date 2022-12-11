// 实现一个防抖函数（debounce）。防抖：函数在一段时间内的多次调用，仅使得最后一次调用有效。

function debounce(fn, delay) {
  let timer
  return function () {
    clearTimeout(timer)
    timer = setTimeout(fn, delay)
  }
}

const fn = () => {
  console.log(1)
}

let a = debounce(fn, 3000)
a()
a()
