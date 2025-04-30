import React from 'react';
import Square from '../components/square';

const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((val, i) => (
        <Square key={i} value={val} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
