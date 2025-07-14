const a = new Object({ a: 1 });

const b = new Object({ a: 1 });

const c = Object.create(a);

console.log(a === b);

console.log(c.__proto__);

console.log(c.a);

console.log(Object.getPrototypeOf(a));

let current: any = {};
for (let i = 0; i < 1000; i++) {
  const newObj = {};
  Object.setPrototypeOf(newObj, current);
  current = newObj;
}

class Person {
  private name = 'xxxx'
}

const xiaoming = new Person()

console.log(Object.getPrototypeOf(xiaoming) === Person.prototype); // true


// 查找不存在的属性
console.time('原型链查找');
current.someProperty; // 遍历整个原型链
console.timeEnd('原型链查找'); // 耗时明显增加
