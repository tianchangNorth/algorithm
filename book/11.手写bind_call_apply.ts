declare interface Function {
  myCall(this: Function, context: any, ...args: any[]): any;
  myApply(this: Function, context: any, args: any[]): any
  myBind(this: Function, context: any, ...args: any[]): any
}
// 手写 call
Function.prototype.myCall = function (context: any, ...args: any[]) {
  context = context || globalThis // null/undefined 处理
  const fnSymbol = Symbol() // 防止属性覆盖
  context[fnSymbol] = this
  const result = context[fnSymbol](...args)
  delete context[fnSymbol]
  return result
}

// 示例
function sayHello(this: any, greeting: string) {
  console.log(`${greeting}, ${this.name}`)
}
const user = { name: 'Alice' }
sayHello.myCall(user, 'Hi') // Hi, Alice


Function.prototype.myApply = function (context: any, args: any[] = []) {
  context = context || globalThis
  const fnSymbol = Symbol()
  context[fnSymbol] = this
  const result = context[fnSymbol](...args)
  delete context[fnSymbol]
  return result
}

// 示例
sayHello.myApply(user, ['Hello']) // Hello, Alice



Function.prototype.myBind = function (context: any, ...boundArgs: any[]) {
  const self = this
  return function (...args: any[]) {
    return self.apply(context, [...boundArgs, ...args])
  }
}

// 示例
const boundFn = sayHello.myBind(user, 'Hey')
boundFn() // Hey, Alice

function Animal(this: any, name: string, sound: string) {
  this.name = name
  this.sound = sound
}

const dog = new (Animal as any)('xiao', 'gou')
console.log(dog.name)   // xiao
console.log(dog.sound)  // gou

console.log(dog.__proto__ === Animal.prototype);

console.log(dog instanceof Animal);



