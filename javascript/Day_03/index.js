// Non-primitve datatype

//? Array, Object, Funciton

//! Array

let arr = [1,2,3,4, "Tom", ]
console.log(arr)

console.log(typeof arr)

// In C++, an array is a continuous block of memory. In JavaScript, an array is actually an Object where the "keys" are the index numbers


// OBJECTS
//? Key: Value pairs
let obj = {
    user_name: "Tom",
    account_number: 94445,
    balance: 440, 
}

console.table(obj)

// Functions

let fun = function()
{
    console.log("Hello from the function")
}

fun()
console.log(typeof fun)

// Type conversion

let total_balance = "100"
let num = Number(total_balance)
console.log(typeof num)

// converting a boolean to a number

let x = true
console.log(Number(x))
// when something does not conver to number it returns NaN (Not a number)

console.log(Number("100x"))

// When we convert null to number it returns 0

console.log(Number(null))

console.log(Number(undefined)) // Returns NaN