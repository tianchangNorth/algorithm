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

const a = new Promise(resolve => setTimeout(() => { console.log('kaishi'); resolve('xxx') }, 1000))

// a.then((res) => {
//   console.log(res);
// })

async function b() {
  const value = await a
  console.log('jeishub');
}

function c() {
  a.then(() => {
    console.log('jieshuc');
  })
}

b()

c()

// type ResolveFunc = (value: any) => void;
// type RejectFunc = (reason: any) => void;

// class Promise {
//   private state: 'pending' | 'fulfilled' | 'rejected' = 'pending';
//   private value: any = undefined;
//   private reason: any = undefined;
//   private onFulfilledCallbacks: ResolveFunc[] = [];
//   private onRejectedCallbacks: RejectFunc[] = [];

//   constructor(executor: (resolve: ResolveFunc, reject: RejectFunc) => void) { }
// }