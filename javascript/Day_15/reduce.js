//? Reduce: reduce aik result create kar ke single value deta

const arr = [10,20,30,40,50]

const sumOfArray = arr.reduce( (prevValue, currValue) => prevValue + currValue , 0 )

console.log(sumOfArray)

// My Reduce function

Array.prototype.myReduce = function(callback , initialization)
{
    let accumulator = initialization;
    for(let i =0; i < this.length; i++)
        accumulator = callback(accumulator , this[i] , i , this)

    return accumulator
}

const callback = (accumulator , currentValue) => accumulator + currentValue


console.log( arr.myReduce( callback , 0 ) )



// Question: grouping the fruits 
const fruits = ["orange", "apple", "banana","orange", "apple", "banana", "orange", "grapes"]

const group  = fruits.reduce( (prev , curr) => 
{
    if(prev[curr] === undefined) prev[curr] = 1

    else prev[curr]++

    return prev
}, {})

console.log(group)

// Clean way

const result = fruits.reduce( (acc, curr) => 
{
    if(acc.hasOwnProperty(curr)) acc[curr]++

    else acc[curr] = 1

    return acc
}, {})

console.log(result)


