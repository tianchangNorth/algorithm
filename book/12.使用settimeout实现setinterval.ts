function mySetInterval(callback: any, delay: any) {
  callback();
  const timer = setTimeout(() => {
    clearTimeout(timer);
    mySetInterval(callback, delay);
  }, delay);
}

mySetInterval(() => {
  console.log(1);
}, 1000);
