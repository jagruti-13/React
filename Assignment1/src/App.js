import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    userName: "FromState",
  };
  //event handler method
  usernameChangedHandler = (event) => {
    this.setState({ userName: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.userName}
        />
        <UserOutput userName="Jags1" />
        <UserOutput userName="Jags2" />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}
export default App;
