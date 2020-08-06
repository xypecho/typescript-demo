// 可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据
// 传入的类型与返回的类型一致

function getData<T>(value: T): T {
    return value;
}
// 调用
getData<number>(123);
getData<string>('123');



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
class MinClass<T>{
    public list: T[] = [];
    add(value: T): void {
        this.list.push(value)
    }
    min(): T {
        let minNum = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}
let a = new MinClass<number>(); // 实例化类，并且指定类的T类型是number
a.add(1)
a.add(12)
a.add(13)

let b = new MinClass<string>();
b.add('1')
b.add('2')


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
class User {
    public username: string | undefined;
    public password: string | undefined;
}
class mysqlDb {
    add(user: User): boolean {
        console.log(user);
        return true;
    }
}
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
let u = new User();
u.username = 'admin';
u.password = '123456';

let db = new mysqlDb();
db.add(u);
