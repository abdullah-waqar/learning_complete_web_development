// string concatenation
let s1 = "Hello"
let s2 = " World"
let s3 = s1 + s2
console.log(`Concatenated string is: ${s3}`)

// length

console.log(`Length of string is: ${s3.length}`)

// Printing qotation in a string
console.log('Hello "World"')

console.log("Hello 'World'")

console.log("Hello \"World\"")

// new line

console.log('A for apple. \nB for ball.')

// indexing

let str = 'Hello'
console.log(str[0])
console.log(str.charAt(0))

// new way to create string

let newString = new String("Hello new string") // memory allocated will in the heap
console.log(newString)
console.log(typeof newString) // object