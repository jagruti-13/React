import React from "react";
const char = (props) => {
  //inline style
  const style = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "2px solid red",
    textAlign: "center",
  };
  return (
    <div style={style} onClick={props.clicked}>
      {props.character}
    </div>
  );
};
export default char;
