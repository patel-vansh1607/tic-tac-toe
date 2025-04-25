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
}   