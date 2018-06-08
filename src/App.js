import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import Categories from './Components/Categories';
import Login from './Components/Login';
import Signup from './Components/Signup';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: 0,
      user: null
    }
  }

  logOut() {
    sessionStorage.removeItem('user');
  }

  render() {
    return (
      <HashRouter>
        <div className="App container-fluid">
          <div className="row elements">
            <div className="col-md-4 ">
              <NavLink to="/" className="col-md-4"> Home </NavLink>
              {/* <a className="col-md-4"><NavLink to="/"> History </NavLink> </a>
              <a className="col-md-4"><NavLink to="/"> Admin </NavLink></a> */}
            </div>
            <div className="col-md-4 ">
              <img src="https://res.cloudinary.com/ddibftjux/image/upload/v1527824178/iron_store.png" alt="Ironstore Logo" className="site-logo" />
            </div>
            <div className="col-md-4 ">
              <a className="col-md-2">Hello {this.state.user}</a>
              <NavLink to="/Signup" className="col-md-2"> Signup </NavLink>
              <NavLink to="/login" className="col-md-2"> Login </NavLink>
              <a href="" className="col-md-2" onClick={this.logOut}> Logout </a>
              <a className="col-md-2"> {this.state.items} <i className="fas fa-shopping-cart"></i></a>
            </div>
          </div>
          <Route exact path="/" component={Categories} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
