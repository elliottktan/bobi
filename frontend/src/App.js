import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/home/homeComponent.js';
import Login from './components/login/loginComponent.js';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/test' component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
