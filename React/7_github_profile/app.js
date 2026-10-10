import React from "react";
import ReactDom from "react-dom/client"
import Body from "./Components/Body";
import Header from "./Components/Header";

function GithubProfile()
{
    // Header
    // 10 card show 

    return (
        <>
            <Header></Header>
            <Body></Body>
        </>
    )
}


ReactDom.createRoot(document.getElementById("root")).render(<GithubProfile></GithubProfile>)