import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client"


function PasswordGenerator()
{
    const [password , setPassword] = useState("")
    const [length , setLength] = useState(5)
    const [numberChanged, setNumberChanged] = useState(false)
    const [charChanged , setCharChanged] = useState(false)

    useEffect( () => generatePassword , [length, numberChanged, charChanged] )

    function generatePassword()
    {
        console.log(`length: ${length}`)
        console.log(`Number Changed: ${numberChanged}`)
        console.log(`Char Changed: ${charChanged}`)
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

        if(numberChanged)
            str += "0123456789"
        if(charChanged)
            str += "()=+!@#$%^&*~`.?/}{[],|"

        let newPassword = ""

        for(let i =0; i < length; i++)
        {
            let randomIndex = Math.floor((Math.random() * str.length) )
            newPassword += str[randomIndex]
        }
        setPassword(newPassword)

    }

    return (
        <>
            <h1>Password is: {password}</h1>
            <input type="range" min={5} max={50} value={length} onChange={(e) => setLength(e.target.value)}></input> 
            <span>(length: {length})</span>

            <input type="checkbox" defaultChecked={numberChanged} onChange={(e) => setNumberChanged(e.target.checked ? false : true)}></input>
            <label>Number</label>

            <input type="checkbox" defaultChecked = {charChanged} onChange={(e) => setCharChanged(e.target.checked ? false : true)}></input>
            <label>Character</label>

            
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<PasswordGenerator></PasswordGenerator>)
