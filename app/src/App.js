import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import List from './components/List';
import Nav from './components/Nav';
import Countdown from './components/Countdown';
import SelectField from './components/SelectField';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      rules: ['Rule 1', 'Rule 2', 'Rule 3'],
      options: [
        {text: 'Languages', value: 'languages'},
        {text: 'Activity', value: 'activity'},
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
        <Grid>
          <header className="App-header">
            <h1 className="App-title">100-Day Coding Challenge</h1>
            <Countdown start={this.today()} end={'09-09-2018'} />
            <List items={this.state.rules}/>
          </header>
          <div className="App-intro">
            <SelectField options={this.state.options} onChange={this.handleChange} />
            {this.state.selection}
            <Router>
              <div>
                <Nav />
                <Route exact path="/" render={() => <Home />} />
                <Route path="/about" render={() => <About />} />
              </div>
            </Router>
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
