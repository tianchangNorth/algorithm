export const obj: Record<string, string> = {
  name: "xiaoming"
}

const proxy = new Proxy(obj, {
  get(target, prop: any, receiver) {
    console.log('target', target);
    console.log('prop', prop);
    console.log('receiver', receiver);
    return target[prop]
  },

  set(target, prop: any, value, receiver) {
    console.log('target', target);
    console.log('prop', prop);
    console.log('value', value);
    console.log('receiver', receiver);
    target[prop] = value;
    return true
  }
})

// console.log(obj.name);

console.log(proxy.name);


proxy.age = '20'
