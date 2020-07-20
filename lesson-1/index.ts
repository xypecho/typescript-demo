// tsc --init 可以生成tsconfig.json 监视tsc文件，实时转成js文件

enum flag {
    success = 1,
    error = -1
};
let s: flag = flag.error;
console.log(flag) // -1

enum Color {
    red,
    blue,
    green
}
let a: Color = Color.blue;
console.log(a) // 1，不赋值默认输出索引