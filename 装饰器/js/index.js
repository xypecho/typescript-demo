"use strict";
// 普通装饰器(无法传参)，作用：在不修改class的情况下扩展类的方法和属性
// function logClass(params: any) {
//     console.log(params)
//     params.prototype.baseUrl = 'www.badi.com';
//     params.prototype.run = function () {
//         console.log('动态扩展了run方法')
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function logMethos(params) {
    return function (target, methodName, desc) {
        console.log('================');
        console.log(target);
        console.log(methodName);
        console.log(desc);
        console.log('================');
    };
}
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    ;
    Animal.prototype.eat = function () {
        console.log(this.name);
    };
    __decorate([
        logMethos('www.baidu.com')
    ], Animal.prototype, "eat", null);
    return Animal;
}());
