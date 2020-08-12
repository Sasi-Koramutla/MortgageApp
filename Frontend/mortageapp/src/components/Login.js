import React, { Component} from 'react';

const baseURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3003/mortgage";
export default class Login extends Component {
    state = {
        loginUsername: "",
        loginPassword: "",
        baseURL: baseURL,
        isLogin:false
      }
  
      handleChange = (event) => {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value})
      }

      //Sasi - create route function
    login = (event) => {
    event.preventDefault();
    fetch(this.state.baseURL + '/login', {
        method: 'POST',
        body: JSON.stringify({username: this.state.loginUsername, 
                            password: this.state.loginPassword}
                            ),
        headers: {
        'Content-Type': 'application/json'
        }
    }).then (res => res.json())
        .then (resJson => {console.log(resJson);
        this.setState({
            login:true,
            loginUsername: resJson.username,
            loginPassword: "",
            token:resJson.token,
            userid:resJson.id,
            isLogin:true
        })
        localStorage.setItem("loginInfo",JSON.stringify({id:resJson.id, loginPassword: resJson.password, loginUsername:resJson.username, token:resJson.token}));
    }).catch (error => console.error({'Error': error}))
    
    }


    render() {
      return (
        <div>
                    {this.state.isLogin? <button className="btn btn-danger form-control" style={{marginLeft:"100px", width:"100px"}}>Logout</button>:<ul className="nav justify-content-center">
                    <li className="nav-item">
                      <input className="form-control" type="text" onChange={this.handleChange} value={this.state.loginUsername} id="loginUsername" name="loginUsername" placeholder="email (Username)"/>
                    </li>
                    <li className="nav-item">
                        <input  className="form-control" type="password" onChange={this.handleChange} value={this.state.loginPassword} id="loginPassword" name="loginPassword" placeholder="Password"/>
                    </li>
                    <li className="nav-item">    
                    <button className="btn btn-dark form-control" style={{marginLeft:"6px"}}onClick={this.login}>Login</button>
                    </li>
                  </ul>}
        </div>
      )
    }
  }