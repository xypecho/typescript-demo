// ts中自定义方法传入参数，对传入的json进行约束
// function printLable(lableInfo: { lable: string }): void {
//     console.log(arguments)
// }
// var lableJSON = {
//     lable: 'AAA'
// };
// printLable(lableJSON);


// 接口：行为和动作的规范，对批量方法进行约束，加上问号代表是可选参数(可选参数不一定放最后)
// interface Fullname {
//     firstName: string;
//     secondName?: string;
// }
// function printName(name: Fullname): void {
//     console.log(name)
// }
// let obj = {
//     secondName: '王',
//     firstName: '呆呆',
//     age: 23
// }// 在外部定义，然后函数内传参，可以不完全和interface匹配(可以有多余的参数)
// printName({ secondName: '王', firstName: '呆呆' });


// 函数接口，对方法传入的参数以及返回值进行约束
// interface encrypt {
// 接收两个字符串类型的参数，返回值也是字符串类型
//     (key: string, value: string): string;
// }
// var md5: encrypt = function (key: string, value: string): string {
//     return '123'
// }


// 可索引接口，对数组和对象进行约束
// interface userArr {
//     // 索引是数字类型，值是字符串类型
//     [index: number]: string;
// }
// var arr: userArr = ['123', '12daas']
// interface userObj {
//     // key是字符串，value也是字符串
//     [index: string]: string;
// }
// var arr1: userObj = {
//     name: '张三'
// }



// 类类型接口，对类的约束和抽象类有点类似
interface Animal {
    // 这个类里面有个name属性，有个eat方法，eat参数是字符串，没有返回值
    name: string,
    eat(str: string): void;
}
// implements关键词是实现接口的意思
class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {
        console.log(this.name + '在吃饭')
    }
}
