import React from "react";
import ReactDOM from "react-dom/client"

let obj = {
    name: "tom",
    age: 17
}

//? React Element
const newElement = (
    <>
        <h1 style={ {backgroundColor: "red" , color: "white"} }> Hello world </h1>
        <h1> Hi how are you {obj.name} </h1>/
    </>
)

//? React Components

function greet() 
{
    return (<>
        <h2>Aur sunaow kasie ho</h2>
    </>)
}

console.log(greet())

import React from 'react'



const meet = () => <h3>I am arrow funciton</h3>
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(meet())



