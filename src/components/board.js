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
            <div className="board-row">
                {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
            </div>
            <button onClick={() => {
                setSquares(Array(9).fill(null));
                setIsXNext(true);
            }}>Reset Game</button>
        </div>
    )
}   


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
      ];

      for (let line of lines) {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
          return squares[a];
        }
        return null
}