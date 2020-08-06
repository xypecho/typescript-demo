// class Person {
//     public name: string;
//     static sex = '男'; // 静态属性
//     constructor(name: string) {
//         this.name = name;
//     }
//     run(): void {
//         alert(`${this.name}is running`)
//     }
//     // 用static定义的方法是静态方法
//     // 静态方法没发直接调用类里面的属性
//     static print(): void {
//         alert(`${this.sex}is printing`)
//     }
// }
// var p = new Person('张三');
// p.run();
// Person.print();
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 多态:父类定义一个方法不去实现，让他的子类去实现，每个子类都有不同的表现
// class Animal {
//     public name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     eat(): void {
//         console.log('吃的方法')
//     }
// }
// class Dog extends Animal {
//     constructor(name: string) {
//         super(name)
//     }
//     eat(): void {
//         console.log(`${this.name}在吃啥`)
//     }
// }
// class Cat extends Animal {
//     constructor(name: string) {
//         super(name)
//     }
//     eat(): void {
//         console.log(`${this.name}在老鼠`)
//     }
// }
// var cat = new Cat('小猫');
// cat.eat();
// 抽象类，提供其他类继承的基类，不能直接被实例化
// 用abstract定义抽象类和抽象方法，
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + "\u5728\u5403\u5565");
    };
    return Dog;
}(Animal));
var a = new Dog('ddd');
a.eat();
