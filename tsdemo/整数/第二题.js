// 实现一个名为 urlToObj 的函数，将一个 url 中的参数转换成对象，入参为 url，返回的结果为对象。
let httpUrlStr = 'https://www.whatever.com?name=zhangsan&age=18'
// { "name": "zhangsan", "age":  "18" }

function urlToObj(url) {
  let obj = {}
  url
    .split('?')[1]
    .split('&')
    .forEach((item) => {
      item = item.split('=')
      obj[item[0]] = item[1]
    })

  return obj
}

const a = urlToObj(httpUrlStr)

console.log(a)
