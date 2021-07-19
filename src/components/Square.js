import React from "react";

export const Square = ({ value }) => {
  //   console.log(props);
  return (
    <button type="button" className="square">
      {value}
    </button>
  );
};
