import React from "react";
const validation = (props) => {
  return (
    <div>
      {props.inputLength > 5 ? <p>Text long enough!!</p> : <p>Text short :(</p>}
    </div>
  );
};
export default validation;
