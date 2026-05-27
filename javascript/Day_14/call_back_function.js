// call back function wo hota hai jis me koi doosra function as a argument jab jata hai 


// function name(fun)
// {
//     console.log("Hello i am name function")
//     fun()
// }


// function greet()
// {
//     console.log("I am the call back function")
// }

// name(greet)


// Call back function setTimeOut takes function as an argument and timeout which will decide after how much time functino should be executed

setTimeout(() => {
    console.log("I will be executed after 1 second")
}, 3000);


// This will call the callback fucntion every 2 seconds
setInterval(() => {
    console.log("I will update after every 2 seconds")
}, 2000);


