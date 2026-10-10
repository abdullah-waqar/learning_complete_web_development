import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Increment from "./increment";
import Decrement from "./decrement";
function App()
{
   const [count, setCount] = useState(0)

   return (
    <div >
        {console.log("App Render")}
        <h1>Count is {count}</h1>

        <Increment count={count} setCount={setCount}></Increment>
        <Decrement setCount={setCount}></Decrement>
    </div>
  );
}


ReactDOM.createRoot(document.getElementById("root")).render(<App></App>)
