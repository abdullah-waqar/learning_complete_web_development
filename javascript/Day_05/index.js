let a = 10
let b = a

// Primitive data types are: Immutable (They can't be changed)

console.log('BEFORE:')
console.log(`Value of a: ${a}`)
console.log(`Value of b: ${b}`)

b = 40;
console.log("AFTER:")
console.log(`Value of a: ${a}`)
console.log(`Value of b: ${b}`)


// Non-Primitive data types: Mutable (They can be change)

let obj1 = 
{
    id: 10,
    name: 'Tom'
}

let obj2 = obj1

console.log("OBJECT 1 BEFORE")
console.table(obj1)
console.table(obj2)

obj2.id = 20

console.log("OBJECT 1 AFTER")
console.table(obj1)
console.table(obj2)