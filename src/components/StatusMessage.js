import React from "react";

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every((el) => el !== null); //every is predefined function
  return (
    // const message = winner
    // ? `Winner is ${winner}`
    // : `Next Player is ${current.isXNext ? "X" : "O"}`;

    // {winner && `Winner is ${winner}`} => Always retun Boolean values.
    // <h2>
    //   {winner && `Winner is ${winner}`}
    //   {!winner &&
    //     !noMovesLeft &&
    //     `Next Player is ${current.isXNext ? "X" : "O"}`}
    //   {!winner && noMovesLeft && "X and O tied"}
    // </h2>

    <div className="status-message">
      {winner && (
        <>
          Winner is{" "}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next Player is{" "}
          <span
            className={current.isXNext === true ? "text-green" : "text-orange"}
          >
            {" "}
            {current.isXNext ? "X" : "O"}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> and{" "}
          <span className="text-orange">O</span> tied.
        </>
      )}
    </div>
  );
};

export default StatusMessage;
