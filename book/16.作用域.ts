function outer() {
  let a = 10;
  return function inner() {
    console.log(a); // 访问的是 outer 的作用域
  };
}

outer()()  