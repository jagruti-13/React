import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  return (
    //because there are two css modules
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};
export default Card;
