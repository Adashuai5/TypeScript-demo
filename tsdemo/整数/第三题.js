// 实现一个名为 uniqueArray 的函数，去掉数组里面重复的内容
// [1, 1, 2, 3, 3, 1] => [1,2,3]

const arr = [1, 1, 2, 3, 3, 1]

// ES6 写法
function uniqueArray1(arr) {
  return [...new Set(arr)]
}

function uniqueArray(arr) {
  let array = []
  for (let i = 0; i < arr.length; i++) {
    if (array.indexOf(arr[i]) === -1) {
      array.push(arr[i])
    }
  }
  return array
}

const a1 = uniqueArray1(arr)
const a = uniqueArray(arr)

console.log(a, a1)
