import { log } from "node:console";

function a() {
  new Promise(() => {
    setTimeout(() => {
      console.log('settime1');
    }, 1000)
  })

  console.log('notime1');
}

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

async function test() {
  await test1();
  console.log(123)
}


function test1() {
  return new Promise<void>(resolve => {
    //请求api
    setTimeout(() => {
      console.log("resolve");
      resolve()
    }, 3000)
  });
}

test();