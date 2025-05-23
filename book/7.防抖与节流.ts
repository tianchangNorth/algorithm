function debounce(fn: Function) {
  let timer: any = null
  return function (this: any, ...args: any[]) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, 1000)
  }
}

function throttle(fn: Function) {
  let canRun = true; // 通过闭包保存一个标记
  return function (this: any, ...args: any[]) {
    if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
    canRun = false; // 立即设置为false
    setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
      fn.apply(this, args);
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
      canRun = true;
    }, 500);
  };
}


const obj121 = {
  prefix: 'Hello, ',
  log: debounce(function (this: any, msg: string) {
    console.log(this.prefix + msg)
  })
}

obj121.log('world') // Hello, world

