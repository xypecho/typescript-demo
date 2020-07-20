// 普通函数
function getInfo(name: string, age: number): string {
    return `${name}====${age}`;
}
var add1 = (n1: number, n2: number): number => {
    return n1 + n2;
}

// 没有返回值的函数
function run(): void {
    console.log('run')
}

// 可选参数,即age可传可不传，可选参数必须在后面
function getInfo1(name: string, age?: number): string {
    return `${name}====${age}`;
}

// 函数设置默认参数
function getInfo2(name: string, age: number = 26): string {
    return `${name}====${age}`;
}

// 多个参数，如下写法
// function add1(a:number,b:number,c:number){

// }
function add(...result: number[]) {
    let sum = 0;
    for (let i = 0; i < result.length; i++) {
        sum += result[i];
        return sum;
    }
}

// ts的函数重载
// 函数的重载指的是两个以上的函数，具有相同的函数名，但是形参的个数或者类型不同，编译器根据实参和形参的类型及个数的最佳匹配，自动确定调用哪一个函数
// 即 同样的方法传入不同的参数执行不同的功能

