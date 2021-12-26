const fn = (n) => {
  if (n <= 0) {
    return 1
  } else {
    return n * fn(n - 1)
  }
}

const result = fn(6)
console.log('result', result)

const fn1 = (n, r) => {
  if (n <= 0) {
    return 1 * r
  } else {
    return fn1(n - 1, n * r)
  }
}

const result1 = fn1(6, 1)
console.log('result1', result1)

function fn2(_n, _r) {
  // <= _n, _r 用作初始化变量
  var n = _n
  var r = _r // <= 将原来的 n, r 变量提出来编程迭代变量
  function _fn2(_n, _r) {
    // <= 迭代函数非常简单,就是更新迭代变量而已
    n = _n
    r = _r
  }
  _loop: while (true) {
    // <= 生成一个迭代循环
    if (n <= 0) {
      return r
    } else {
      _fn2(n - 1, r * n)
      continue _loop // <= 执行迭代函数，并且进入下一次迭代
    }
  }
}
