"use strict";
// es5中的类
// function Person() {
//     this.name = '张三';
//     this.age = 20;
// }
// var p = new Person();
// console.log(p)
// console.log(p.name)
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
// ts中定义类
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.run = function () {
        alert(this.name);
    };
    return Person;
}());
// var p = new Person('张三');
// p.run();
// ts中实现继承
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(n) {
        return _super.call(this, n) || this; // 初始化父类的构造函数
    }
    return Web;
}(Person));
var w = new Web('王五');
console.log(w.name);
