// For of loop

const arr = [10,20,30,40]

for(let value of arr)
{
    console.log(value)
}

// For of loop on character

let str = "Hi, I am Tom"

for(let char of str)
{
    console.log(char)
}


// ! DONT USE FOR OF LOOP ON OBJECT

// const user = {
//     name: "Tom",
//     age: 22
// }

// for(let key of user)
// {
//     console.log(key)
// }


//* FOR EACH loop
//? For each funciton takes the callback function as the argument
arr.forEach( (val , idx) => console.log(val , idx) )


// Printing the values of array with index

Array.prototype.printWithIndex = function () 
{
    for(let i = 0; i < this.length; i++)
    {
        console.log(i , this[i])
    }
}

console.log("My custom function")

arr.printWithIndex()

// My forEach loop

Array.prototype.myForEach = function(callback)
{
    for(let i = 0; i < this.length; i++)
    {
        callback(i , this[i])
    }
}

arr.myForEach((index , value) => console.log(index , value))


Array.prototype.myMap = function(callback)
{
   let emptyArray = []
   for(let i = 0; i < this.length; i++)
   {
        let transformedValue = callback(this[i], i , this)
        emptyArray.push(transformedValue)
   }
   return emptyArray
}

console.log( arr.myMap( (num) => num * 2) )

// Filter

Array.prototype.myfilter = function(callback)
{
    let emptyArray = []

    for(let i = 0; i < this.length; i++)
    {
        let filteredValue = callback(this[i] , i , this)
        if(filteredValue)
            emptyArray.push(this[i])
    }

    return emptyArray
}

console.log(arr.myfilter( (value) => value >= 30 ))






