import React, { useCallback, useMemo, useState } from "react";
import ReactDom from "react-dom/client"

function fibbonnaci(n)
{
    if(n<=1)
        return n
    return fibbonnaci(n-1) + fibbonnaci(n-2);
}

function App()
{

    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)



    const result = useMemo(() => fibbonnaci(number) , [number])
    
    return <>
        <h1>Counter is: {count}</h1>

        <button onClick={() => setCount(count+1)}>Increment</button>

        <button onClick={() => setCount(count-1)}>Decrement</button>


        <div>
            <h2>Fibbonnaci number is: {result}</h2>
            <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))}/>
        </div>
    </>
}

ReactDom.createRoot(document.getElementById("root")).render(<App></App>)