import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'
import TextField from './components/TextField'
import List from './components/List'
import Nav from './components/Nav'
import Countdown from './components/Countdown'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      rules: ['Rule 1', 'Rule 2', 'Rule 3']
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

  today = () => {
    var date = new Date();
    var month = date.getUTCMonth() + 1;
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();

    var today = year + "/" + month + "/" + day;
    return today;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">100-Day Coding Challenge</h1>
          <Countdown start={this.today()} end={'09-09-2018'} />
          <List items={this.state.rules}/>
        </header>
        <p className="App-intro">
          <Nav />
        </p>
      </div>
    );
  }
}

export default App;
