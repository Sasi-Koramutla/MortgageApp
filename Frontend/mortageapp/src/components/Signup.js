import React, { Component} from 'react';


export default class Signup extends Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        password: ""
      }
  
      handleChange = (event) => {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value})
      }

    render() {
      return (
        <div>
            <form className="form justify-content-center" style={{width:"50%", margin:"50px"}}>
            <div className="form-group">
                  <input className="form-control" type="text" onChange={this.handleChange} value={this.state.firstName} placeholder="First name" id="firstName" name="firstName"/>
              </div>
              <div className="form-group">
                  <input className="form-control" type="text"  onChange={this.handleChange} value={this.state.lastName} placeholder="Last name" id="lastName" name="lastName"/>
              </div>
              <div className="form-group">
                  <input className="form-control" type="text" onChange={this.handleChange} value={this.state.username} id="username" name="username" placeholder="email"/>
              </div>
              <div className="form-group"> 
                  <input  className="form-control" type="password" onChange={this.handleChange} value={this.state.password} id="password" name="password" placeholder="Password"/>
              </div>
              <div className="form-group">
                  <input className="btn btn-primary form-control" style={{width:"70%"}} type="submit" value="Sign up"/>
              </div>  
            </form>
        </div>
      )
    }
  }