"use strict";
// Number
let a = 10;
console.log(a);
// String
let str = "Hello";
console.log(str);
// Boolean
let bool = false;
console.log(bool);
// Bigint
let bigNumber = 233241n;
// null
let abc = null;
console.log(abc);
// undefined
let bcd = undefined;
console.log(bcd);
let num1 = undefined;
console.log(num1);
// any -> now this become the normal js which can take any type of value
let x = "sdf";
x = 23;
console.log(x);
// unknown -> yeh b koi b value le skta hai jaise any leta hai lakin is me koi operation karne se phale type check karni parti hai jo is ko safer banata hai any se
let xx = "hello";
xx = 20;
if (typeof xx == "number")
    xx = xx + 10;
console.log(xx);
// Non-primitive data type
let arr = [1, 2, 3, 4];
// if i want array contains both string and number then i can use union operation to tell...
let arr3 = ["Tom", 23, 45, "Jack"];
// Tuple -> Array with fixed number of elements
let tuple = ["Hello", 20, 30];
// Objects
// this is called inline
let obj1 = {
    name: "Tom",
    age: 20,
    gender: "male"
};
// another way
let person;
person = {
    name: "Cat",
    age: 10,
    balance: 1000
};
let c1 = {
    name: "Hanks",
    age: 20,
    id: 1
};
let a1 = {
    name: "Jack",
    age: 23,
    position: "Web Administrator"
};
let g1 = {
    name: "hi guy",
    age: 20,
};
const h1 = [
    {
        name: "Tom",
        age: 20
    },
    {
        name: "Jerry",
        age: 30
    }
];
function printName(name) {
    return name;
}
// callback function
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
placeOrder(20, (amount) => console.log(amount));
// Rest Operator
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => ans += val);
    console.log(ans);
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person1 = new Person("Tom", 12);
console.log(person1);
