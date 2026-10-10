// Create element through JS

const root = document.getElementById("root")

const React = {

    createElement: function(tag, styles , children)
    {
        const element = document.createElement(tag)
        
        if(typeof children === "object")
        {
            for(let i of children)
            {
                element.appendChild(i)
                console.log(i)
            }
        }
        else
            element.innerText = children
        

        for(let key in styles)
            element.style[key] = styles[key]
        
        return element
    }

}


const ReactDom = 
{
    render: function (element , root)
    {
        root.appendChild(element)
    }
}

const header1 = React.createElement("h1" , {fontSize: "30px" , backgroundColor: "blue" , color: "yellow"} , "Hello World")
const header2 = React.createElement("h1" , {fontSize: "30px" , backgroundColor: "pink" , color: "green"} , "Hello World")

// Creating unordered list

const li1 = React.createElement("li" , {} , "HTML")
const li2 = React.createElement("li" , {} , "CSS")
const li3 = React.createElement("li" , {} , "JS")


const ul = React.createElement("ul" , {} , [li1 , li2 , li3])

ReactDom.render(header1 , root)
ReactDom.render(header2 , root)
ReactDom.render(ul , root)



