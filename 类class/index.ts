// es5中的类
// function Person() {
//     this.name = '张三';
//     this.age = 20;
// }
// var p = new Person();
// console.log(p)
// console.log(p.name)


// ts中定义类
class Person {
   public name: string; // 定义属性
    constructor(n: string) { // 构造函数，实例化类的时候触发
        this.name = n;
    }
    run(): void {
        alert(this.name)
    }
}
// var p = new Person('张三');
// p.run();


// ts中实现继承
class Web extends Person {
    constructor(n: string) {
        super(n) // 初始化父类的构造函数
    }
}
var w = new Web('王五');
console.log(w.name)