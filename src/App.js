import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import FamousPerson from './components/FamousPerson';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/Home/Home'




class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Header />
      {/* <FamousPerson /> */}
      

      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
             <Link to="/famousPerson">Famous Person</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route exact path="/famousPerson" component={FamousPerson}/>
          
        </div>
        
     
     
      
      

      </Router> 
      
      </div>
    );
  }
}

export default App;
