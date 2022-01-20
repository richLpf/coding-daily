// 基础类型

let bool: boolean = true

let str: string = "abc"

let number: number | undefined | null = 1;

// 数组
let arr: number[] = [1,2,3]
let arr2: Array<number | string> = [1,2,3,4]

// 元组
let tuple: [number, string] = [0, "a"]


// 函数
let add = (x: number, y: number):number => x + y

let compute : (x: number, y: number) => number
compute = (a, b) => a + b

// 对象
let obj: { x: number, y: number } = { x: 1, y: 2 }

// symbol

// undefined

// null

// void
let noReturn = ():void => {}

// any

// never
let error = () => {
    throw new Error("error")
}


//---------//枚举类型

enum Role {
    developer,
    admin,
    guest,
    common
}

enum Message {
    Success= "Success",
    Fail="Fail"
}

// 常量枚举
const enum Month {
    Jan,
    Feb,
    Mar
}

let a : Message = Message.Success

// 可选属性\只读
interface Books {
    readonly id: number;
    name: string;
    page: number;
    author?: string;
    // [x: string]: any; // 声明的类型，必要要兼容，之前的类型
}

// ------- // 接口类型
interface Result {
    name: string;
    age: number;
    books: Books[];
}

// 绕过类型检查
// 1、将对象复制给一个变量

function render(result: Result) {
    result.books.forEach(val => {
        console.log("val", val)
    })
}

let data = {
    name: "test",
    age: 10,
    books: [{
        id: 1,
        name: "2",
        page: 100,
        category: ""
    }]
}

render(data)

// 2、as类型断言

render({
    name: "test",
    age: 10,
    books: [{
        id: 1,
        name: "2",
        page: 100,
        category: ""
    }]
} as Result)

// 3、断言

render(<Result>{
    name: "test",
    age: 10,
    books: [{
        id: 1,
        name: "2",
        page: 100,
        category: ""
    }]
})

//-------// 函数类型的接口

let plus: (x: number, y: number) => number;

interface plus1 {
    (x: number, y: number) : number
}

type plus2 = (x: number, y: number) => number;

let plus3 : plus2 = (a, b) => a + b

// 可选参数
function add1(x: number, y?:number){
    return y ? x + y : x
}

// 函数默认值
function add2(x: number, y: number, z=1){
    return x + y + z
}

// 剩余参数
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;

function add8(...rest: any[]):any {

}
// ------- // 类
// 类
class Dog{
    constructor(name: string){
        this.name = name;
    }
    name: string;
    run(){}
}

// 继承
class Husky extends Dog {
    constructor(name: string, color: string){
        super(name)
        this.color = color;
    }
    color: string
}

// 私有成员属性

// 受保护，只能在类或子类中使用，不能被实例化

// 只读属性