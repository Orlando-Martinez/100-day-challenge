import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">100-Day Coding Challenge</h1>
        </header>
        <p className="App-intro">
          <ul>
            <li>Enter challenge rules here.</li>
            <li></li>
            <li></li>
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
