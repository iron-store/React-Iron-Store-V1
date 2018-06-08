import React, { Component } from 'react';
import NavBar from './Components/NavBar';
// import Categories from './Components/Categories'
import Home from './Components/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar className="container-fluid"/>
        {/* <Categories className="categories container" /> */}
        <Home className="categories container" />

      </div>
    );
  }
}

export default App;
