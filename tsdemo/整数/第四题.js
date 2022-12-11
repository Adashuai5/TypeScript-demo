// 找出一个字符串中出现次数最多的字符，并统计出现的次数
// "ababajshbaasdaaaa" => {char:'a',count:9}

const str = 'ababajshbaasdaaaa'

function computeString(str) {
  let map = new Map()
  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) {
      map.set(str[i], 1)
    } else {
      map.set(str[i], map.get(str[i]) + 1)
    }
  }
  let returns = { char: '', count: 0 }

  map.forEach((value, key) => {
  if (value > returns.count) {
      returns.char = key
      returns.count = value
    }
  })

  return returns
}

const a = computeString(str)
console.log(a)