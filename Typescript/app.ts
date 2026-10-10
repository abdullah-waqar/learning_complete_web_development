// Number
let a: number = 10;
console.log(a)

// String

let str: string = "Hello"
console.log(str)

// Boolean

let bool:boolean = false;
console.log(bool)

// Bigint

let bigNumber: bigint = 233241n;

// null

let abc:null = null;
console.log(abc)

// undefined
let bcd:undefined = undefined;
console.log(bcd)

let num1:number = undefined;
console.log(num1)

// any -> now this become the normal js which can take any type of value

let x:any = "sdf";
x = 23;
console.log(x)

// unknown -> yeh b koi b value le skta hai jaise any leta hai lakin is me koi operation karne se phale type check karni parti hai jo is ko safer banata hai any se

let xx:unknown = "hello";
xx = 20
if(typeof xx == "number")
xx = xx + 10

console.log(xx)

// Non-primitive data type

let arr:number[] = [1,2,3,4];


// if i want array contains both string and number then i can use union operation to tell...

let arr3:(number | string)[] = ["Tom" , 23, 45, "Jack"]

// Tuple -> Array with fixed number of elements

let tuple:[string , number , number] = ["Hello" , 20, 30]; 


// Objects
// this is called inline
let obj1:{name: string, age: number, gender: string} = {
    name: "Tom",
    age: 20,
    gender: "male"
}

// another way

let person:{name: string , age: number, balance: number};

person = {
    name: "Cat",
    age: 10,
    balance: 1000
}

// Another way

type customer = {
    name: string,
    age: number,
    id: number
}

let c1 : customer = {
    name: "Hanks",
    age: 20,
    id: 1
}

// another way

interface admin {
    name: string,
    age: number,
    position: string

}

let a1 : admin = {
    name: "Jack",
    age: 23,
    position: "Web Administrator"
}



interface guy {
    name: string,
    age: number,
    id?: number    // this is optional if i dont give it will not throw an error
}



let g1 : guy = {
    name: "hi guy",
    age: 20,
}
// array of objects

interface human {
    name: string,
    age: number
}

const h1 : human[] = [
    {
        name: "Tom",
        age: 20
    },
    {
        name: "Jerry",
        age: 30
    }
]

function printName(name:string):string
{

    return name;
}


// callback function

function placeOrder(order: number, callback:(amount: number) => void): void
{
    const amount:number = order + 10;
    callback(amount)

}

placeOrder(20 ,  (amount) => console.log(amount))

// Rest Operator

function total (...arr:number[]) : void
{
    let ans:number = 0

    arr.forEach( (val: number) => ans += val )

    console.log(ans)
}


class Person
{

        name: string;
        age: number

        constructor (name: string , age: number)
        {
            this.name = name;
            this.age = age;

        }

}


const person1 = new Person("Tom", 12);
console.log(person1)
