import { rejects } from "node:assert";
import { log } from "node:console";
import { resolve } from "node:path";

// function a() {
//   new Promise(() => {
//     setTimeout(() => {
//       console.log('settime1');
//     }, 1000)
//   })

//   console.log('notime1');
// }

// a()

// async function b() {
//   await new Promise(() => {
//     setTimeout(() => {
//       console.log('settime2');
//     }, 1000)
//   })
//   console.log('notime2');
// }

// b()

// async function test() {
//   const a = await wait();
//   console.log(a);

//   console.log(123)
// }

// function wait() {
//   return new Promise(resolve => setTimeout(() => {
//     console.log('xxx');
//     resolve('jjjjj'); // ✅ 关键点：必须调用 resolve()
//   }, 1000));
// }

// test();

// async function test() {
//   await test1();
//   console.log(123)
// }


// function test1() {
//   return new Promise<void>(resolve => {
//     //请求api
//     setTimeout(() => {
//       console.log("resolve");
//       resolve()
//     }, 3000)
//   });
// }

// test();

// const a = new Promise(resolve => setTimeout(() => { console.log('kaishi'); resolve('xxx') }, 1000))

// a.then((res) => {
//   console.log(res);
// })

// async function b() {
//   const value = await a
//   console.log('jeishub');
// }

// function c() {
//   a.then(() => {
//     console.log('jieshuc');
//   })
// }

// b()

// c()

// const e = async () => {
//   await Promise.resolve(setTimeout(() => {
//     console.log('xx');
//   }, 1000))

//   console.log('xxxx');
// }

// e()

type ResolveFunc = (value: any) => void;
type RejectFunc = (reason: any) => void;

class MyPromise {
  private state: 'pending' | 'fulfilled' | 'rejected' = 'pending';
  private value: any = undefined;
  private reason: any = undefined;
  private onFulfilledCallbacks: ResolveFunc[] = [];
  private onRejectedCallbacks: RejectFunc[] = [];

  constructor(executor: (resolve: ResolveFunc, reject: RejectFunc) => void) {
    const resolve = (value: any) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
      }
    }

    const reject = (reason: any) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
      }
    }

    try {
      executor(resolve, reject)
    }
    catch (err) {
      reject(err)
    }
  }

  then(onFulfilled?: ResolveFunc, onRejected?: RejectFunc) {
    return new MyPromise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        try {
          const x = onFulfilled?.(this.value);
          resolve(x);
        } catch (err) {
          reject(err);
        }
      } else if (this.state === 'rejected') {
        try {
          const x = onFulfilled?.(this.reason)
          reject(x)
        }
        catch (err) {
          reject(err)
        }
      } else if (this.state === 'pending') {
        this.onFulfilledCallbacks.push((value) => {
          try {
            const x = onFulfilled?.(value);
            resolve(x);
          } catch (err) {
            reject(err);
          }
        });
        this.onRejectedCallbacks.push((reason) => {
          try {
            const x = onRejected?.(reason);
            reject(x);
          } catch (err) {
            reject(err);
          }
        });
      }
    })
  }
}

const a = new MyPromise(resolve => resolve('xxxx'))

a.then((res) => {
  console.log(res);
}, (err) => {
  console.log(err);
})