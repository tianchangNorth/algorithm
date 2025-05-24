const obj = {
  name: 'zhangsan',
  age: 18,
}

const proto = Object.prototype as any;
proto.gender = 'male';

for (const key in obj) {
  console.log(key); // name age
}

// 不遍历原型的方法
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key); // name age
  }
}

Object.keys(obj).forEach(key => {
  console.log(key); // name, age
});

for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
}

