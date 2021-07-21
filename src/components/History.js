import React from "react";

const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                // style={{
                //   fontWeight: move === currentMove ? "bold" : "normal",
                // }}
                className={`btn-move ${move === currentMove ? "active" : ""} `} //Very Important (dynamic classes)
                type="button"
                onClick={() => {
                  moveTo(move);
                }}
              >
                {move === 0 ? `Got to game Start` : `Got to move #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
