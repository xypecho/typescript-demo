"use strict";
// ts中自定义方法传入参数，对传入的json进行约束
// function printLable(lableInfo: { lable: string }): void {
//     console.log(arguments)
// }
// var lableJSON = {
//     lable: 'AAA'
// };
// printLable(lableJSON);
function printName(name) {
    console.log(name);
}
var obj = {
    secondName: '王',
    firstName: '呆呆',
    age: 23
}; // 在外部定义，然后函数内传参，可以不完全和interface匹配(可以有多余的参数)
printName({ secondName: '王', firstName: '呆呆' });
