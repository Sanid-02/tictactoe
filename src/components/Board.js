import React, { useState } from "react";
import { Square } from "./Square";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  //   console.log(board);
  const [isXNext, setIsNext] = useState(false);
  const handleSquareClick = (position) => {
    if (board[position]) {
      return;
    }

    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? "X" : "O";
        }
        return square;
      });
    });

    setIsNext((prev) => !prev);
  };

  const renderSquare = (position) => {
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {/* <Square
          value={board[0]}
          onClick={() => {
            handleSquareClick();
          }}
        />
        <Square value={board[1]} />
        <Square value={board[2]} /> */}

        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
