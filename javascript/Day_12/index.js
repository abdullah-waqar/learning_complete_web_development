function greet()
{
    console.log("Hello from the funciton")
}


//* function can be store inside the variable
// this function will be store in the heap and fun will points to the function from the stack memory
let fun = function ()
{
    console.log("I am store in the variable")
}
fun()

//* Arrow function

const fn = () => 
{
    console.log("Hi, I am arrow function")
}

fn()
// I can write in the one line (for a single line code and it will return automatically)
const add = (number1, number2) => number1 + number2;

console.log(add(2,3))

// For a single parameter, i can also write without bracket

const cube = num => num * num * num;

console.log(cube(2))


// Sum of many parameters (we can accept many parameters using rest operator)

function sum(...numbers)
{
    let sum = 0;
    for(let i = 0; i < numbers.length; i++)
        sum+=numbers[i];
    console.log(sum)
}


sum(1,2,3,4,5);