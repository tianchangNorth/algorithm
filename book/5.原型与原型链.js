const obj = new Object();

console.log(obj.__proto__ === Object.prototype); // undefined

Object.prototype.name = 'ssss'
obj.name = 'xxx'  

console.log(obj.name); // xxx

delete obj.name

console.log(obj.name); 

