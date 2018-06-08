import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Signup from './Signup';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChanges = this.handleChange.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
  }

  changeUserStatue(userId){
    fetch(`http://localhost:3000/user-id/${userId}`)
    .then( res => res.json())
    .then( userInfo => {
      console.log("User object: ", userInfo);
    })
  }

  handleChange = e => {
    const inputName = e.target.name;
    const value = e.target.value;
    this.setState({
      [inputName]: value
    });
  }

  handleSubmitLogin = e => {
    let user = this.state;
    fetch(`http://localhost:3000/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify(user)
    })
      .then(res => { return res.json() })
      .then(user => { 
        sessionStorage.setItem('user', user._id); 
        this.changeUserStatue()
      });
    e.preventDefault();
  }

  render() {
    return (
      <div className="Login container">
        <Route exact path="/signup" component={Signup} />
        <div className="row">
          <div className="offset-xs-4 col-xs-4 offset-md-3 col-md-6 my-5">

            <h2> Welcome! </h2>
            <h3> Please Login </h3>

          </div>
        </div>

        <div className="row">
          <div className="offset-xs-4 col-xs-4 offset-md-3 col-md-6">

            <form onSubmit={this.handleSubmitLogin}>
              <div className="form-group">
                <label> Email </label>
                <input type="email" className="form-control" value={this.state.email} onChange={this.handleChange} name="email" placeholder="example@email.com" />
              </div>

              <div className="form-group">
                <label> Password </label>
                <input type="password" className="form-control" value={this.state.password} onChange={this.handleChange} name="password" placeholder="enter your password" />
              </div>

              <button type="submit" className="btn btn-primary" data-dismiss="modal"> Login </button>
              <HashRouter>
                <button className="btn btn-link" data-dismiss="modal"><NavLink to="/signup"> Or Signup </NavLink></button>
              </HashRouter>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Login;
