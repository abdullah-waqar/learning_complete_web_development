const board = document.querySelector(".board")
const winningMessage = document.querySelector("#winningMessage")
const restartButton = document.querySelector("#restartButton")
let player1 = "X"
let player2 = "O"

let turn = 0

let winner = -1

let arr = []

let winnerGrid = 
[
    [0,1,2] , [3,4,5], [6,7,8],
    [0,3,6] , [1,4,7], [2,5,8],
    [0,4,8] , [2, 4, 6]
]

const winnerFunction = () => 
{
    
for(let i = 0; i < winnerGrid.length; i++)
{
    let confirm1 = 0
    let confirm2 = 0

    for(let j = 0; j < 3; j++)
    {
        
        if(board.children[winnerGrid[i][j]].textContent === 'X')
        {
            console.log(board.children[i])
            confirm1++;
        }
        else if(board.children[winnerGrid[i][j]].textContent === 'O')
        {
            confirm2++;
        }
    }

    if(confirm1 == 3)
    {
        winner = 1

    }
    else if(confirm2 == 3)
    {
        winner = 2
    }

}
return winner;
}



const resetGame = () => 
{
    turn = 0
    winner = -1
    arr = []
    winningMessage.textContent = ""

    for(let i = 0; i < 9; i++)
    {
        board.children[i].textContent = ""
    }
}

const draw = () => {
    let boxFilled = 0;
    for(let i = 0; i < 9; i++)
    {
        if(board.children[i].textContent != "")
            boxFilled++
    }

    boxFilled == 9 ? true : false
}
board.addEventListener("click" , (event) => {
    // console.log(event.target.id)
    // Player 1 turn
    if(turn == 0)
    {
        if(!arr.includes(event.target.id))
        {
            arr.push(event.target.id)
            event.target.textContent = player1
            turn = 1
        }

    }
    // Player 2 turn
    else if(turn == 1)
    {
        if(!arr.includes(event.target.id))
        {
            arr.push(event.target.id)
            event.target.textContent = player2
            turn = 0
        }
    }

    let checkWinner = winnerFunction()

    if(checkWinner === 1)
    {
        winningMessage.textContent = "Player one Win the match"
        turn = -1
        
        console.log("Player one is winner")
    }
    else if(checkWinner === 2)
    {
        winningMessage.textContent = "Player two Win the match"
        turn = -1
        console.log("Player 2 is Winner")
    }

    if(winner == -1 && draw())
    {
        winningMessage.textContent = "Match is draw"
    }
    
})


restartButton.addEventListener("click", resetGame)

