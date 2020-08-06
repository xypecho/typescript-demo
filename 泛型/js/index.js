"use strict";
// 可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据
// 传入的类型与返回的类型一致
function getData(value) {
    return value;
}
// 调用
getData(123);
getData('123');
// 泛型类
// class Minclass {
//     public list: number[] = [];
//     add(num: number) {
//         this.list.push(num);
//     }
//     min(): number {
//         let minNum = this.list[0];
//         for (let i = 0; i < this.list.length; i++) {
//             if (minNum > this.list[i]) {
//                 minNum = this.list[i];
//             }
//         }
//         return minNum;
//     }
// }
// let a = new Minclass();
// a.add(1)
// a.add(2)
// a.add(0)
// a.add(6)
// a.add(-6)
// a.add(9)
// alert(a.min())
// 改写楼上的代码
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var a = new MinClass(); // 实例化类，并且指定类的T类型是number
a.add(1);
a.add(12);
a.add(13);
var b = new MinClass();
b.add('1');
b.add('2');
// 泛型接口
// interface configFn {
//     (val1: string, val2: string): string;
// }
// let setData1:configFn = function (val1: string, val2: string): string {
//     return val1 + val2;
// }
// setData1('王', '呆呆')
// 泛型接口第一种写法
// interface configFn {
//     <T>(val1: T, val2: T): T;
// }
// let setData1: configFn = function <T>(val1: T, val2: T): T {
//     return val1;
// }
// setData1('王', '呆呆')
// 第二种写法
// interface configFn<T> {
//     (val1: T): T;
// }
// function getDate<T>(val: T): T {
//     return val;
// }
// let myGetData1: configFn<string> = getDate;
// myGetData1('王')
// 把类作为参数类型
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var mysqlDb = /** @class */ (function () {
    function mysqlDb() {
    }
    mysqlDb.prototype.add = function (user) {
        console.log(user);
        return true;
    };
    return mysqlDb;
}());
/*
操作数据库的泛型类
class mysqlDb<T> {
    add(user: T): boolean {
        console.log(user);
        return true;
    }
}
let db = new mysqlDb<User>();

*/
var u = new User();
u.username = 'admin';
u.password = '123456';
var db = new mysqlDb();
db.add(u);
