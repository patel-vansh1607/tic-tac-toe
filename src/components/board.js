const { useState } = require("react");

function Board () {
    const[squares, setSquares] = useState(Array(9).fill(null))
    const[isXNext, setIsXNext] = useState(true)

    const winner = calculateWinner(squares)
}