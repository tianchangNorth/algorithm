function parallel(urls: string[], max: number, callback: Function) {
  const results = new Array(urls.length); // 保存结果，按顺序填充
  let current = 0
  let completed = 0

  for (let i = 0; i < Math.min(max, urls.length); i++) {
    next();
  }

  function next() {
    if (current >= urls.length) return
    const index = current++
    fetch(urls[index]).then(
      data => results[index] = data.text()
    ).catch(
      err => results[index] = err
    ).finally(() => {
      completed++
      if (completed === urls.length) {
        callback(results)
      }
      else next()
    })
  }
}

// 这个版本不行 因为数组初始化时每个元素不是promise所以当前max个请求发出后会直接返回

// function parallel(urls: string[], max: number, callback: (results: any[]) => void) {
//   const results: Promise<any>[] = new Array(urls.length)
//   console.log(results);

//   let current = 0

//   const schedule = () => {
//     if (current > urls.length) return
//     const index = current++
//     const promise = fetch(urls[index]).then(res => res.text()).catch(error => error)
//     results[index] = promise.then(data => ({ status: 'fulfilled', value: data }))
//       .catch(err => ({ status: 'rejected', reson: err }))
//       .finally(() => { schedule() })
//   }
//   for (let i = 0; i < Math.min(max, urls.length); i++) {
//     schedule()
//   }
//   Promise.allSettled(results).then(() => callback(results))
// }

const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3',
  'https://jsonplaceholder.typicode.com/posts/4'
];

parallel(urls, 2, (results: any) => {
  console.log('All done:', results);
});