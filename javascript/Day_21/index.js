const inspirationalQuotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford"
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington"
  },
  {
    quote: "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    quote: "Don't count the days, make the days count.",
    author: "Muhammad Ali"
  },
  {
    quote: "An unexamined life is not worth living.",
    author: "Socrates"
  },
  {
    quote: "What you do speaks so loudly that I cannot hear what you say.",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    author: "Martin Luther King Jr."
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs"
  }
];




const generateButton = document.getElementById("generateQuote")

const quote = document.getElementById("quote")
const author = document.getElementById("author")

console.log(quote)
    
function generateQuote(event)
{
    
    let randomQuoteNumber = Math.floor(Math.random() * inspirationalQuotes.length)

    let randomQuote = inspirationalQuotes[randomQuoteNumber]

    quote.innerText = randomQuote.quote
    author.innerText = randomQuote.author

    console.log(event)
}

generateButton.addEventListener("click", generateQuote)

const keyboardKey = document.getElementById("keyboardKey")

// document.addEventListener("keydown", (event) => {
//     console.log(event.key)
//     console.log(event.target)
    
// })

document.addEventListener("click" , (event) => {
    const x = event.clientX
    const y = event.clientY
    console.log(x , y)
    const element = document.createElement("div")
    element.style.position = "absolute"
    element.style.top = y + "px"
    element.style.left = x + "px"

    element.style.width = "80px"
    element.style.height = "80px"
    element.style.borderRadius = "100%"
    element.style.backgroundColor = "pink"
    element.style.transition = "all 0.7s ease-in-out "
    document.body.appendChild(element);

    setTimeout(() => {
        element.style.opacity = "0";
        element.style.transform = "scale(0)";
    }, 400);

    // element.style.display = "none"

})

