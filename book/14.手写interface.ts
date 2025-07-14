function myInterface(obj: any, constructor: any) {
  let proto = obj.__proto__
  while (proto) {
    if (proto === constructor.prototype) return true
    proto = proto.__proto__
  }
  return false
}

console.log(myInterface([], Array));

class myFuntion {

}
const sayhi = new myFuntion()

console.log(Object.getPrototypeOf(myFuntion) === Function.prototype); // true
console.log(Object.getPrototypeOf(sayhi) === myFuntion.prototype); // ✅ true


