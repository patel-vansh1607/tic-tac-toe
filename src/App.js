import React, { useState } from 'react';
import Board from './components/board';
import './App.css';

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const winner = calculateWinner(squares);
  const status = winner
    ? `🎉 Winner: ${winner}`
    : squares.every(Boolean)
    ? "It's a draw!"
    : `Next player: ${isX ? 'X' : 'O'}`;

  const handleClick = (i) => {
    if (squares[i] || winner) return;

    const newSquares = [...squares];
    newSquares[i] = isX ? 'X' : 'O';
    setSquares(newSquares);
    setIsX(!isX);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsX(true);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <p>{status}</p>
      <Board squares={squares} onClick={handleClick} />
      <button onClick={handleReset} className="reset-btn">Reset</button>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // columns
    [0,4,8],[2,4,6]          // diagonals
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default App;
