import React, { Component } from 'react';
// import Login from './Components/Login';
import Products from './Components/Products'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Products />
      </div>
    );
  }
}

export default App;
