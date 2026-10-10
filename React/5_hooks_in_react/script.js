import React, {useState} from "react"
import ReactDOM from "react-dom/client"

const greet = <h1>Hello world</h1>


function Counter()
{
    let [count, setCount] = useState(0)
    

    function incrementNumber()
    {
        count += 1
        setCount(count)
    }

    function decrementNumber()
    {
        count -= 1
        setCount(count)
    }

    return (
        <div className="first">
        <h1>Count is: {count}</h1>
        <button onClick={incrementNumber}>Increment</button>
        <button onClick={decrementNumber}>Decrement</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Counter/>)