import React, { Component } from 'react';
import './App.css';
import Dashboard from './dashboard';
import Panels from './panels/index'

class App extends Component {
  render() {
    return ( 
      <div className="App">
      <Dashboard />
      <Panels />
      </div>
    );
  }

}

export default App;
