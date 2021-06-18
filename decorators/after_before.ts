Function.prototype.before = function (fn) {
  var _this = this; // 用来保存调用这个函数的引用，如func_1调用此函数，则_this指向func_1
  return function () {
    // 返回一个函数，这个函数包含原函数和新函数，原函数指的是func_1，新函数指的是fn
    fn.apply(this, arguments); // 执行新函数
    return _this.apply(this, arguments); // 执行原函数
  };
};

Function.prototype.after = function (fn) {
  var _this = this;
  return function () {
    var r = _this.apply(this, arguments); // 先执行原函数，也就是func_1
    fn.apply(this, arguments); // 再执行新函数
    return r;
  };
};

var func_1 = function () {
  console.log("2");
};

func_1 = func_1
  .before(function () {
    console.log("1");
  })
  .after(function () {
    console.log("3");
  });

func_1();


// 装饰器实现
// 其本质是 Object.defineProperty(obj, prop, desc)
/**
* param obj 当前操作对象
* param prop 需要定义的对象属性名称
* param desc 属性描述符
*/

function before(target, key, descriptor) {
  const fn = descriptor.value;
  return {
    ...descriptor,
    value() {
      console.log('before')
      return fn.apply(this, arguments);
    }
  }
}
function after(target, key, descriptor) {
  const fn = descriptor.value;
  return {
    ...descriptor,
    value() {
      let result = fn.apply(this, arguments);
      console.log('after');
      return result;
    }
  }
}
class Test {
  @after
  @before
  func(){
    console.log('func')
  }
}
const test = new Test();
test.func();