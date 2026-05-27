//* Sets: it contains the unique value

const set = new Set([10,20,30, 30])
console.log(set)
console.log(typeof set) // Object


//* new way to create set

const set1 = new Set()

set1.add(10)
set1.add(20)
set1.add(10)
set1.add(40)

set1.forEach( value => console.log(value) )

console.log("Size of set: " ,set1.size)

console.log(set1.has(10))

set1.delete(10)

set1.forEach( value => console.log(value) )

set1.has(10) ? console.log("Yes, it is present") : console.log("No, it is not present")

// Union of two sets

const set_1 = new Set( [10,20,30,40] )

const set_2 = new Set([10,50,60,20])

// const set_3 = new Set([...set1 ,...set_2])

// intersection of two sets


const arr_1 = [...set_1]
const arr_2 = [...set_2]

const arr_3 = arr_1.filter(value => {
    for(let i = 0; i < arr_2.length; i++)
      if(value == arr_2[i]) return true
    return false
    
})

console.log(new Set(arr_3))


