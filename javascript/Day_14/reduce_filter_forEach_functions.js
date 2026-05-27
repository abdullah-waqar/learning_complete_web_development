let arr = [1,2,3,4,5]

// For each loop

arr.forEach( (value) => console.log(value) )


// filter 

let filteredResult = arr.filter( (value) => value%2 == 0 )
console.log(filteredResult)


// reduce

let sum = arr.reduce( (prev , curr) => prev + curr )
console.log(sum)

const students = [
    {name: "Tom", age:22, marks: 70},
    {name: "Cat", age:32, marks: 80},
    {name: "John", age:42, marks: 30},
    {name: "Hanks", age:21, marks: 40},
    {name: "Iris", age:32, marks: 90},
]

const filteredStudents = students.filter(({marks}) => marks >= 70)
console.log(filteredStudents)


// For each loop on students

students.forEach( value => console.log(value))


// MAP - it can modify the value

const result = arr.map( value => value * value )
console.log(result)


// Chaining the functions

// Filter numbers, double them, then print them instantly

arr.filter( value => value >= 2 ) //filtering
.map( value  => value * value ) // doubling
.forEach(value => console.log(value)) // printing


// Filter out even number than squre it and print it
console.log()

arr.filter( value => value % 2 == 0 )
.map( value => value * value )
.forEach( value => console.log(value) )

