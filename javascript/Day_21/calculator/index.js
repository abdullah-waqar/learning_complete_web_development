const inputField = document.getElementById("inputField")

const answer = document.getElementById("answer")

let val1 = 0
let val2 = 0


document.addEventListener("keydown" , (event) => {
    

    switch(event.key)
    {
        case 'Enter':
            if(val1 == 0)
            {
                val1 = inputField.value
                inputField.value= ""
            }
            else 
            {
                val2 = inputField.value
                inputField.value = ""
            }

            break
        case '+':
            answer.textContent = Number(val1) + Number(val2)
            val1 = val2 = 0
            break
        case '-':
            answer.textContent = Number(val1) - Number(val2)
            val1 = val2 = 0
            break

            

    }
})