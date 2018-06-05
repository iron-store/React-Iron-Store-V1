import React, { Component } from 'react';
// import Login from './Components/Login';
import Products from './Components/Products'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container App">
        <div className="row">
          <Products />
        </div>
      </div>
    );
  }
}

export default App;
