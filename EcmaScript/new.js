// new 创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例
// 使用new执行了4步操作
// 1. 创建一个新对象obj
// 2. 将构造函数的作用域赋值给新对象（因此this指向了这个新对象）
// 3. 执行构造函数中的代码（为这个对象添加新属性）
// 4. 返回新对象

function objectFactory() {
  var obj = new Object()
  var cons = [].shift.call(arguments)
  obj.__proto__ = cons.prototype
  var result = cons.apply(obj, arguments)
  return typeof result === 'object' ? result : obj
}

function Animal(name, age) {
  this.name = name
  this.age = age
  this.toString = function() {
    return `这是${name}，今年${age}岁了。`
  }
}

var dog1 = objectFactory(Animal, '一哈', 1)
console.log(dog1.toString())

var dog2 = new Animal('二哈', 2)
console.log(dog2); // 实例化后得到的是对象
console.log(dog2.toString())