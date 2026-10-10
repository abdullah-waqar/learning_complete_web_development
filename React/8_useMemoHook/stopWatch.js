import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDom from "react-dom/client"


function App()
{
    const [time , setTime] = useState(0)
    const timerRef = useRef(null)
    const [text, setText] = useState("Start")

    function start()
    {
        if(timerRef.current !== null) return
        setText("start")
        timerRef.current = setInterval(
            ()=>{
                setTime(time => time + 1)
            }, 1000
        )
    }

    function stop() {
        clearInterval(timerRef.current)
        timerRef.current = null
        setText("Resume")
        
    }

    function reset()
    {
        clearInterval(timerRef.current)
        timerRef.current = null

        setTime(prevTime => 0)
    }
    

    return (
        <>
            <h1>Time: {time}</h1>

            <button onClick={start}>{text}</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<App></App>)