import React from "react";
import ReactDOM from "react-dom/client"


const element = "Hello world"

let obj = {
    name: "Tom",
    age: "35"
}

function Greet(props)
{
    return <h1>Hi {props.name}, your age is {props.age}</h1>
}

// const element1 = Greet(obj)
const element1 = <Greet name="Tom" age = "34"/>

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"))

ReactRoot.render(element1)