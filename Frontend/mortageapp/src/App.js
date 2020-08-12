import React, { Component} from 'react';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Application from "./components/Application";

export default class App extends Component {


  render() {
    return (
      <div className="main">
        <Signup/>
        <Login/>
        <Application/>
      </div>
    )
  }
}

