import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import FamousPerson from './components/FamousPerson'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <FamousPerson />
        
      </div>
    );
  }
}

export default App;
