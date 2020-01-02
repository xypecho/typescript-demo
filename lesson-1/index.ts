// tsc --init 可以生成tsconfig.json 监视tsc文件，实时转成js文件

enum flag { success, error = -2, 'end' };
let s: flag = flag.end;
console.log(s) // 1