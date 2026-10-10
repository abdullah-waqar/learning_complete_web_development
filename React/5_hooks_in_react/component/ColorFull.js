import React,{ useState , useEffect } from "react"
function ColorFull()
{
     const [color, setColor] = useState("black")
    
    useEffect(() => {
        document.body.style.backgroundColor = color
    }, [color])
    console.log("Colorfull Function called")
    return (
        <>
             <h1>Background Color Changer</h1>
             <div className="but">
                    <button onClick={() => setColor("red")} style={{backgroundColor: "red"}}>Red</button>
                    <button onClick={() => setColor("blue")} style={{backgroundColor: "blue"}}>Blue</button>
                    <button onClick={() => setColor("orange")} style={{backgroundColor: "orange"}}>Orange</button>
                    <button onClick={() => setColor("green")} style={{backgroundColor: "green"}}>Green</button>
                    <button onClick={() => setColor("pink")} style={{backgroundColor: "pink"}}>Pink</button>

             </div>
        </>
    )
}

export default React.memo(ColorFull)