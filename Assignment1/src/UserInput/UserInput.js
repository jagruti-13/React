import React from "react";

const UserInput = (props) => {
  //inline style
  const style = {
    border: "10px solid red",
  };
  return (
    <input
      type="text"
      style={style}
      onChange={props.changed}
      value={props.currentName}
    />
  );
};
export default UserInput;
