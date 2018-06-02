import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'
import TextField from './components/TextField'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  textFieldHandler = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  alert = () => {
    alert('Click handler worked!')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">100-Day Coding Challenge</h1>
          <Button text={'Click Me'} handleClick={this.alert}/>
          <TextField value={this.state.text} handleChange={this.textFieldHandler}/>
          {this.state.text}
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
