/*let obj1 = {
    a:1,
    b:2
}

let obj2 = obj1; //? This is a shallow copy: Because copy is happening by reference

//* Deep copy: This is independed copy

let obj3 = structuredClone(obj1)

let arr = [1,2,3,4]
let arr2 = structuredClone( arr);

//? NESTED OBJECT: object within object

let user = {
    name: "tom",
    balance: 420,
    address: {
        pincode: 4660,
        city: "Tailwind"
    }
};

// console.log(user.address.pincode)

// When nested objects are created than Object.assign do shallow copy of nested object and  deep copy of direct object
let user2 = Object.assign({}, user)
user2.address.pincode = 1000

user2.name = "Cat"
console.log(user.address.pincode)
console.log(user.name)

// Even with the help of spread operator to copy we will still get the same issue

let user3 = {...user , a:1, c:2}
console.log(user3)

user3.address.pincode = 9090
console.log(user.address.pincode) */

//*Destructuring of object

// let obj = {
//     name: "Tom",
//     money: 400,
//     balance: 30,
//     age:20
// }

// const {name, age} = obj;
// console.log(name, age)

//* Destructuring with array

// const arr = [1,2,3,4,5]

// const [first , second, ...rest] = arr;
// console.log(first, second , rest)

//* Prototype

//? Array
// let arr = [1,2,3,4,5]

// console.log(arr.__proto__ === Array.prototype)
// console.log(arr.__proto__.__proto__ === Object.prototype)
// console.log(arr.__proto__.__proto__.__proto__ === null)
// console.log(arr.__proto__.__proto__.__proto__)

//? Object
// let user = {
//     name: "Tom",
//     age: 19
// }

// console.log(user.__proto__ == Object.prototype)
// console.log(user.__proto__.__proto__ == null)

//? Functions

function fun ()
{
    console.log("I am a function")
}

console.log(fun.__proto__ == Function.prototype)
console.log(fun.__proto__.__proto__ == Object.prototype)
console.log(fun.__proto__.__proto__.__proto__ == null)
