import React, { Component } from 'react';

class Login extends Component {
    constructor (props){
        super(props);
        this.state = {
          inputValue: this.props.email,
        };
      }

    render() {
    return (
      <div className="Login">
        <form>
            <label>Email</label>
            <input type="text" value={this.state.inputValue} />
        </form>
      </div>
    );
  }
}

export default Login;
