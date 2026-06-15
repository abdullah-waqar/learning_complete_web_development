// const promise = new Promise( (resolve, reject) => {
//     setTimeout( () => resolve("Promise is consumed") , 1000 );
// })


// async function greet() {
//     let data = await fetch("http://www.google.com")
//     let someBeautifulPromise = await promise;
//     console.log(data)
//     console.log(someBeautifulPromise)
// }




// greet()
// console.log("END")

// aync function always returns a promise

function work1()
{
    setTimeout( () => console.log("work one is resolved"), 1000 ) 
    return "Pending"
}

function work2() {
    setTimeout( () => console.log("work two is resolved"), 1000)
    return "pending"
}

async function DoingWork() {
    const [task1 , task2] = await Promise.all( [work1(), work2()] )

    console.log(task1)
    console.log(task2)
}

DoingWork()


