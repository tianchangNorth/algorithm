import { Writable } from "stream";

function log<T extends (...args: any[]) => any>(
  target: T,
  context: ClassMethodDecoratorContext
): T {
  console.log('target', target);
  console.log('context', context);

  // 包装原方法
  const wrapped = function (this: any, ...args: Parameters<T>): ReturnType<T> {
    console.log(`🧾 调用方法: ${String(context.name)}`);
    return target.apply(this, args)
  }

  return wrapped as T
}

class User {
  people = 'xiaoming'
  @log
  say() {
    console.log('hello world' + this.people);
  }
}

new User().say()


// 类装饰器
function sealed<T extends { new(...args: any[]): object }>(value: T, context: ClassDecoratorContext<T>) {
  console.log(value);
  console.log(context);
  context.addInitializer(function (this: any) {
    console.log(`${context.name}被实例化于:${new Date().toISOString()}`);
  })
}

@sealed
class People {

}

// 方法装饰器
function logFunctionTime<T extends (...args: any[]) => any>(target: T, context: ClassMethodDecoratorContext) {
  const logTime = function (this: any, ...args: Parameters<T>) {
    const start = performance.now()
    const result = target.apply(this, args)
    const end = performance.now()
    console.log(`⏱ ${String(context.name)} 执行耗时: ${end - start}ms`);
    return result
  }

  return logTime as T
}


class Calculator {
  @logFunctionTime
  add(a: number, b: number): number {
    return a + b
  }
}

new Calculator().add(3, 4)


// 属性装饰器
// 这就是@private的实现

function readonly(value: undefined, context: ClassFieldDecoratorContext<any, any>) {
  console.log(value);
  console.log(context);
  if (context.kind === 'field') {
    return function (this: any, initialValue: any) {
      Object.defineProperty(this, context.name, {
        value: initialValue,
        writable: false
      })
      return initialValue
    }
  }
}

class Student {
  @readonly
  name = 'tianchang'
}

//访问其装饰器
function capitalize(value: any, context: ClassAccessorDecoratorContext) {
  if (context.kind === 'accessor') {
    const { get, set } = value;
    return {
      get() {
        const v = get.call(this);
        return v.toUpperCase();
      },
      set(v: string) {
        set.call(this, v.trim());
      }
    }
  }
}

class Book {
  #title = '';
  @capitalize
  accessor title: string = '';
}

const b = new Book();
b.title = '  hello world ';
console.log(b.title); // "HELLO WORLD"




