import React, { Component} from 'react';
import Signup from "./components/Signup";
import Login from "./components/Login";

export default class App extends Component {


  render() {
    return (
      <div className="main">
        <Signup/>
        <Login/>
      </div>
    )
  }
}

