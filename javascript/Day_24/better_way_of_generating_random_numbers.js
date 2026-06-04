
// let loopRan = 0
// const generateRandomNumberList = (range , numberOfRandomNumbers) => 
// {
//     const list = new Set()
    
//     while(list.size < numberOfRandomNumbers)
//     {
//         loopRan += 1
        
//         let randomNumber = Math.floor(Math.random() * range)
//         list.add(randomNumber)
//     }

//     return [...list];

// }

// const list = generateRandomNumberList(25 , 25)

// console.log(list)
// console.log(loopRan)

//* Fisher algorithm is best for generating unique random numbers


const arr = [1,2,3,4,5,6,7,8,9,10]

const randomNumbers = (size, count) =>
{
    if(count > size)
        throw new Error("Count cannot be larger than the size")

    for (let i = 0; i < count; i++)
    {

    
    let rNumber = Math.floor(Math.random() * (size - i))

    let lastIndex = size - i - 1

    // swap values
    let temp = arr[rNumber]
    arr[rNumber] = arr[lastIndex]
    arr[lastIndex] = temp
    }
    return arr.slice(size - count)

}

console.log(randomNumbers(arr.length , 5))
