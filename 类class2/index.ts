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

abstract class Animal {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract eat(): any;
}

class Dog extends Animal {
    constructor(name: string) {
        super(name)
    }
    // 抽象类的子类必须要实现抽象类里面的方法
    eat(): void {
        console.log(`${this.name}在吃啥`)
    }
}
let a = new Dog('ddd');
a.eat();