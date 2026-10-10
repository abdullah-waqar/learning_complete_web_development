const element = React.createElement("h1" , {id: "header1" , className: "Header", style: {backgroundColor: "blue" , color: "yellow"} }, "Hello world");

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"))

ReactRoot.render(element)














