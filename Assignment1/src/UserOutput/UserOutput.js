import React from "react";
import "./UserOutput.css";
const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Your Username:{props.userName}</p>
      <p>I hope I'll be overwritten!!!!!</p>
    </div>
  );
};
export default UserOutput;
