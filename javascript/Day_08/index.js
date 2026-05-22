// array

let arr = [1,2,3,4,5,6]

console.log(`the length of array is: ${arr}`)

let newarr = arr;

console.log(newarr == arr) 

newarr.push(10)

console.log(arr)

// slice

console.log(arr.slice(2,4)) // it will give me array from 2 to 4 excluding 4

// splice

// console.log(arr.splice(2,4)) // from 2 index give me 4 values, splice will change in the orignal array
// console.log(arr)

// splice(start_index, total_element_deleted, add_element)

arr.splice(2,0,60,70)
console.log(arr)

