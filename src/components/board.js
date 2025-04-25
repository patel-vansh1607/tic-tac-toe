const { useState } = require("react");

function Board () {
    const[squares, setSquares] = useState(Array(9).fill(null))
    const[isXNext, setIsXNext] = useState(true)

    const winner = calculateWinner(squares)

    const handleClick = (i) => {
        if(squares[i] || winner) return
    }

    const newSquares = squares.slice()
    newSquares[i] = isXNext ? 'X' : 'O'
    setSquares(newSquares)
    setIsXNext(!isXNext)

    function renderSqaure(i){
        return <Square value={squares[i]} onclick={() => handleclick(i)} />
    }

    return(
        <div>
            <h2>{winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}</h2>
            <div className="board-row">
                {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
            </div>
        </div>
    )
}   