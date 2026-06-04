

const form = document.querySelector("form")

// form.addEventListener( 'input' , (event) => {
//     console.log(event.target.value)
// } )


form.addEventListener("submit", (event) => {
    
    // If i dont want that my page get refresh

    event.preventDefault()
    

    // const first = document.getElementById("first")
    // console.log(first.value)

    // const second = document.getElementById("second")
    // console.log(second.value)

    // const third = document.getElementById("third")
    // console.log(third.value)

    // console.log(event.target[0].value)
    // console.log(event.target[1].value)
    // console.log(event.target[2].value)

    // for(let ele of event.target)
    //     console.log(ele.value)


    const data = new FormData(form)
    const keys = data.keys()
    const entries = data.entries()
  
    
    keys.forEach(key => {
        console.log(`${key}`)
    });

    entries.forEach(entries => {
        console.log(`${entries}`)
    })

    console.log(Array.from(data.keys()))
    console.log(Array.from(data.values()))
})


