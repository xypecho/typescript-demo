### lesson-1

#### 1. ts中的数据类型

ts中定义变量时必须指定类型
```
布尔类型（boolean）
数字类型（number）
字符串类型(string)
数组类型（array）
元组类型（tuple）
枚举类型（enum）

任意类型（any）
null 和 undefined
void类型
never类型
```

##### 1.1 定义数组类型

```
//定义数组有两种方式：
 
//1.类型名称+[]
let arr1: number[]=[1,2,3];//数字数组
let arr2: string[] = ['h', 'h', 'h']  //字符串数组
let arr3: any[] = [1, 'h', 'h', 3] //允许数组中出现任意类型
 
//2.Array关键字+<>
let arr4: Array<number>=[1,2,3]  //数字数组
let arr5: Array<string | number>=[1,'b','c'];  //联合类型（表示数组的元素既可以是number,也可以是string类型）
```

##### 1.2 定义元组类型

元组类型可以给数组中每一个元素单独指定类型
```
let arr: [number, string] = [1, '123'] // 正确写法
let arr: [string, number] = [1, '123'] // 报错
```

##### 1.3 定义枚举类型

枚举类型定义方式：

enum 枚举名:{
    标识符:整型常数, // 如果标识符没有赋值，那么他的value就是index
    标识符:整型常数
}
// 有点类似于对象，

```
enum flag { success = 1, error = 0 };
let s: flag = flag.success;
console.log(s) // 1


enum flag { success, error = 3, 'end' };
let s: flag = flag.end;
console.log(s) // 4  ,error = 3相当于将error的index改成了3，然后'end'的索引就变成4了
```