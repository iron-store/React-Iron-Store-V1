import React, { Component } from 'react';
import NavBar from './Components/NavBar';
// import Categories from './Components/Categories'
import CategoryBar from './Components/CategoryBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar className="container-fluid"/>
        {/* <Categories className="categories container" /> */}
        <CategoryBar className="categories container" />

      </div>
    );
  }
}

export default App;
