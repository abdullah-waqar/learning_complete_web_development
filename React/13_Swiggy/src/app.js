import ReactDOM from "react-dom/client"
import React from "react"

function App()
{
    return (
        <>
            <div className="bg-amber-600">
                    Hello from react 
            </div>
        </>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)
