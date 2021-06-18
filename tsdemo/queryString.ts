/**
 * 3. 解析url中的queryString
 *
 * 输入：https://www.youzan.com?name=coder&age=20&callback=https%3A%2F%2Fyouzan.com%3Fname%3Dtest&list[]=a&list[]=b&json={str:abc,num:123}
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
    const r = param.split('=')
    r[1] = unescape(r[1])
    if (r[0].match(/(\[\])$/)) {
      r[0] = r[0].replace(/(\[\])$/, '')
      r[1] = [r[1]]
    }

    returnObj[r[0]] = returnObj[r[0]]
      ? returnObj[r[0]].concat(r[1])
      : JSON.parse(JSON.stringify(r[1]))
  })
  return returnObj
}

queryString(
  'https://www.youzan.com?name=coder&age=20&callback=https%3A%2F%2Fyouzan.com%3Fname%3Dtest&list[]=a&list[]=b&json={str:abc,num:123}'
)
