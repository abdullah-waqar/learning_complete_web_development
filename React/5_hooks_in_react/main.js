import React , {useState , useEffect} from "react";
import ReactDOM from "react-dom/client";
import ColorFull from "./component/ColorFull";


function Main()
{
   const [count, setCount] = useState(0)
   console.log("Main funciton called")
   return (
    <>
        
        <h1>Count is {count}</h1>
        <button style={{backgroundColor: "black", color: "white", width: "100px"}} onClick={() => setCount(count+1)}>Increment</button>
       
        <ColorFull ></ColorFull>
    </>
   )
}

ReactDOM.createRoot(document.getElementById("root")).render(< Main />)