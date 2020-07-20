"use strict";
// tsc --init 可以生成tsconfig.json 监视tsc文件，实时转成js文件
var flag;
(function (flag) {
    flag[flag["success"] = 1] = "success";
    flag[flag["error"] = -1] = "error";
})(flag || (flag = {}));
;
var s = flag.error;
console.log(flag); // -1
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
var a = Color.blue;
console.log(a); // 1，不赋值默认输出索引
