import React, { Component } from 'react';
// import { Route, NavLink, HashRouter } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.email,
    };
  }

  render() {
    return (
      <div className="Signup container">

        <div className="row">
          <div className="offset-xs-4 col-xs-4 offset-md-3 col-md-6 my-5">

            <h2> Welcome! </h2>
            <h3> Please Signup </h3>

          </div>
        </div>

        <div className="row">
          <div className="offset-xs-4 col-xs-4 offset-md-3 col-md-6">

            <form>
              <div className="form-group">
                <label for="email"> Email </label>
                <input type="email" className="form-control" name="email" placeholder="example@email.com" />
              </div>

              <div className="form-group">
                <label for="exampleInputPassword1"> Password </label>
                <input type="password" className="form-control" name="password" placeholder="enter your password" />
              </div>

              <button className="btn btn-primary" data-dismiss="modal"> Signup </button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
