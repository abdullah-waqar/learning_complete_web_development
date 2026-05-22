// Creating a object

let user = 
{
    name: "Tom",
    age: 50,
    gender: 'male',
}

console.log(user)
console.log(typeof user)

// Accessing values 
console.log(user.name) // (Keys are the string)
console.log(user["age"])

//? Second way to create a Object

const person = new Object()
person.name = "Cat"
person.age = 13

console.log(person.name)

//? Third way to create a object

class People
{
    constructor(name, age)
    {
        this.name = name
        this.age = age
    }
}

let person1 = new People("Hanks", 12)
console.log(person1.name)


//! Getting all the keys and vales of the object

const keys = Object.keys(person1)
console.log("All the keys of Person 1 Object: ", keys)

const values = Object.values(person1)
console.log(values)

//! Getting both keys and values
const bothKeysAndValues = Object.entries(person1)
console.log(bothKeysAndValues)


// Assign use case
// assign is used to combine two objects together

const obj1 = {a: 1 , b: 2}
const obj2 = {c: 3 , d: 4}

const obj3 = Object.assign(obj1, obj2)

console.log(obj3)


let allKeys = Object.keys(obj3)
console.log(`All the keys of object 1: ${allKeys}`)







