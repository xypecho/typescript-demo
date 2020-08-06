// 普通装饰器(无法传参)，作用：在不修改class的情况下扩展类的方法和属性
// function logClass(params: any) {
//     console.log(params)
//     params.prototype.baseUrl = 'www.badi.com';
//     params.prototype.run = function () {
//         console.log('动态扩展了run方法')
//     }
// }

// @logClass
// class Animal {
//     public name: string;
//     constructor(name: string) {
//         this.name = name;
//     };
//     eat(): void {
//         console.log('在吃饭');
//     }
// }

// let a = new Animal('呆呆');
// console.log(a)
// console.log(a.baseUrl)


// 装饰器工厂(可传参)
// function logClass(params: string) {
//     return function (target:any) {
//         console.log(params)
//         console.log(target)
//     }
// }

// @logClass('hello')
// class Animal {
//     public name: string;
//     constructor(name: string) {
//         this.name = name;
//     };
//     eat(): void {
//         console.log('在吃饭');
//     }
// }


// 方法装饰器
function logMethos(params: any) {
return function(target:any,methodName:string,desc:any){
    console.log('================')
    console.log(target)
    console.log(methodName)
    console.log(desc)
    console.log('================')
}
}

class Animal {
    public name: string;
    constructor(name: string) {
        this.name = name;
    };
    @logMethos('www.baidu.com')
    eat(): void {
        console.log(this.name);
    }
}