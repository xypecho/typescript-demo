"use strict";
// tsc --init 可以生成tsconfig.json 监视tsc文件，实时转成js文件
var flag;
(function (flag) {
    flag[flag["success"] = 0] = "success";
    flag[flag["error"] = -2] = "error";
    flag[flag["end"] = -1] = "end";
})(flag || (flag = {}));
;
var s = flag.end;
console.log(s); // 1
