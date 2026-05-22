let obj = 
{
    name: "Tom",
    age: 19,
    gender: "male",
    city: "biqu"
}

// for in loop, getting keys from the object

// for(let key in obj)
// {
//     console.log(`${key}: ${obj[key]}`)
// }

// const keys = Object.keys(obj)
// console.log(keys)


// Difference between for and object.keys
/*
let obj1 = {
    name: "Tom",
    age: 19,
    gender: "male",
    city: "biqu"
}


let obj2 = {
    salary: 1000,
    experience: 4
}

obj2.__proto__ = obj1;

// object.keys on obj2

console.log(Object.keys(obj2)) // [ 'salary', 'experience' ]

for(const key in obj2) console.log(key) // getting obj1 and obj2 keys

//? Key values can be: Writable, enumerable, configurable

console.log(Object.getOwnPropertyDescriptor(obj1 , 'name'))
//? Writable: decide whether i can change the value or not
//? Configurable: decide wheather can i change the values of writable and enumerable 




*/

//! for in loop : Isko ham array ke sth nhi likhte
// arr is an object

let arr = [10,20,30,40,50]
console.log(`Type of array: ${typeof arr}`)

arr.name = "Tom" // if it is object, i can do this... now here name will be indx and value will be tom

//? Now thats why we dont use for in loop in array because if someone uses array like this for in loop will print string as an index too.
console.log("For in loop on array")
for (let idx in arr)
{
    console.log(idx, arr[idx])
}

// Here only integer index values will be printed
console.log("\nFor loop on array")
for (let i =0; i < arr.length; i++)
{
    console.log(i, arr[i])
}