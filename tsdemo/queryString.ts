/**
 * 解析url中的queryString
 *
 * 输入：https://www.youzan.com?name=coder&age=20&callback=https%3A%2F%2Fyouzan.com%3Fname%3Dtest&json={str:abc,num:123}&list[]=a&list[]=b
 * 输出：
 * {
 *  name: "coder",
 *  age: "20",
 *  callback: "https://youzan.com?name=test",
 *  list: ["a", "b"],
 *  json: {
 *      str: 'abc',
 *      num: 123
 *  }
 * }
 */

const queryString = (string) => {
  const query = string.split('?')[1]
  const params = query.split('&')
  const returnObj = {}
  params.forEach((param) => {
    const item = param.split('=')
    item[1] = unescape(item[1])
    if (item[1]?.match(/^\{|\}$/g)) {
      item[1] = JSON.parse(item[1].replace(/[a-zA-Z]\w*/g, ($1) => `"${$1}"`))
    }
    if (item[0].match(/(\[\])$/g)) {
      item[0] = item[0].replace(/(\[\])$/g, '')
      item[1] = [item[1]]
    }
    returnObj[item[0]] = returnObj[item[0]]
      ? returnObj[item[0]].concat(item[1])
      : item[1]
  })
  return returnObj
}

console.log(
  queryString(
    'https://www.youzan.com?name=coder&age=20&callback=https%3A%2F%2Fyouzan.com%3Fname%3Dtest&json={str:abc,num:123}&list[]=a&list[]=b'
  )
)
