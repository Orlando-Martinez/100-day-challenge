import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Nav from './components/Nav';
import Countdown from './components/Countdown';
import SelectField from './components/SelectField';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      rules: ['Rule 1', 'Rule 2', 'Rule 3'],
      options: [
        {text: 'option1', value: 'option1'},
        {text: 'option2', value: 'option2'},
        {text: 'option3', value: 'option3'}
      ]
    };
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

  handleChange = (event) => {
    this.setState({
      selection: event.target.value
    })
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
          <SelectField options={this.state.options} onChange={this.handleChange} />
          {this.state.selection}
          <Nav />        
        </p>
      </div>
    );
  }
}

export default App;
