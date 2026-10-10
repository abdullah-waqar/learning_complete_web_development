import React from "react";
import ReactDOM from "react-dom/client"
import Card from "./component/Card";
import Header from "./component/Header";
import obj from "./utils/dummy";

function App()
{
    return (
        <>
            {/* HEADER */}
            <Header/>

            {/* BODY */}
            <div style={{display: "flex" , gap: "20px"}}>
                {obj.map( (value , index)=> <Card key={index} cloth={value.cloth} offer={value.offer}/> )}
            </div>
       </>
    )
}

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"))
ReactRoot.render(<App/>)