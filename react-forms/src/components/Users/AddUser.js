import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredusername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredusername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input :(",
        message: "Please enter valid name and age(non empty values..)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age :(",
        message: "Please enter valid age>0",
      });
      return;
    }
    props.onAddUser(enteredusername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const ErrorHandler = () => {
    setError(null);
  };

  return (
    //if error is undefined errormodal tag won't come
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={ErrorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={enteredusername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Your Age(in years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
