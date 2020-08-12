import React, { Component} from 'react';
import Signup from "./components/Signup";
import Login from "./components/Login";
//import Application from "./components/Application";

export default class App extends Component {
  state = {
    isSignUp:false
  }

  render() {
    return (
      <div className="main">
        <Signup/>
        <Login/>

      </div>
    )
  }
}

