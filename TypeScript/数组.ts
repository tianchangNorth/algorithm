const list1: readonly number[] = [1, 2, 3]

function getList(array: number[]) {

}

//readonly number[] 是 number[] 的父类型 父类型不能替代字类型

// getList(list1) //报错 类型“readonly number[]”的参数不能赋给类型“number[]”的参数。类型 "readonly number[]" 为 "readonly"，不能分配给可变类型 "number[]"。

// 报错
// const arr:readonly Array<number> = [0, 1];

getList(list1 as number[])

const t: readonly [number, string?, boolean?] = [1, '1']

console.log(t);

