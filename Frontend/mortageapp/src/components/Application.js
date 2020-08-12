import React, { Component} from 'react';

const baseURL = process.env.REACT_APP_BACKEND_URL /*|| "http://localhost:3003/mortgage"*/;
export default class Application extends Component {
    state = {
        address: "",
        city: "",
        state: "",
        zip: "",
        description: "",
        yearBuilt: "",
        loanPurpose: "",
        ssn: "",
        baseURL: baseURL
      }
  
      handleChange = (event) => {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value})
      }


    render() {
      return (
        <div>
            <form className="form justify-content-center" style={{width:"50%", margin:"50px"}} onSubmit={this.createUser}>
            <div className="form-group">
                  <input className="form-control" type="text" onChange={this.handleChange} value={this.state.address} placeholder="Property Address" id="address" name="address"/>
              </div>
              <div className="form-group">
                  <input className="form-control" type="text"  onChange={this.handleChange} value={this.state.city} placeholder="City" id="city" name="city"/>
              </div>
              <div className="form-group">
                  <input className="form-control" type="text" onChange={this.handleChange} value={this.state.state} id="state" name="state" placeholder="State"/>
              </div>
              <div className="form-group"> 
                  <input  className="form-control" type="number" onChange={this.handleChange} value={this.state.zip} id="zip" name="zip" placeholder="Zip"/>
              </div>
              <div className="form-group">
                  <input className="form-control" type="text" onChange={this.handleChange} value={this.state.description} id="description" name="description" placeholder="Property Description"/>
              </div>
              <div className="form-group">
                  <input className="form-control" type="number" onChange={this.handleChange} value={this.state.yearBuilt} id="yearBuilt" name="yearBuilt" placeholder="Year Built"/>
              </div>
              <div className="form-group">
                  <input className="form-control" type="text" onChange={this.handleChange} value={this.state.loanPurpose} id="loanPurpose" name="loanPurpose" placeholder="Purpose of Loan"/>
              </div>
              <div className="form-group">
                  <input className="form-control" type="password" onChange={this.handleChange} value={this.state.ssn} id="ssn" name="ssn" placeholder="Borrower's SSN"/>
              </div>
              <div className="form-group">
                  <input className="btn btn-success form-control" style={{width:"70%"}} type="submit" value="Update"/>
              </div>  
            </form>
        </div>
      )
    }
  }