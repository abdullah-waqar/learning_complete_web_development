console.log(window.document.head.textContent)




// document.getElementById("first").innerText = "YOOOO"

// console.log(document.getElementById("root").innerHTML)

// console.log(document.getElementById("root").innerText)


const sameClassNameElements = document.getElementsByClassName("header1")

for(let element of sameClassNameElements)
{
    element.style.backgroundColor = "pink"
    element.style.fontSize = "60px"
}
