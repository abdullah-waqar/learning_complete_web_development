
const buttons = document.querySelectorAll("button")
const body = document.body;

// const buttonArray = Array.from(buttons)


// for (const btn of buttonArray)
// {
//     console.log(btn.id)
//     btn.style.backgroundColor = btn.id
//     btn.addEventListener("click" , () => 
//     {
//         body.style.backgroundColor = btn.id
//     })

// }


// buttons.forEach( (btn) =>{
//     console.log(btn)
//     btn.addEventListener("click", ()=> body.style.backgroundColor = btn.id )
// })



//* Better way

const parent = document.getElementById("root")

parent.addEventListener("click" , (event) => {
        let targetID = event.target.id;
        if (event.target.tagName === "BUTTON")
            body.style.backgroundColor = targetID
})
