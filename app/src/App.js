import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid, } from 'react-flexbox-grid';
import Home from './pages/Home';
import About from './pages/About';
import Challenge from './pages/Challenge';

import Nav from './components/Nav';
import SelectField from './components/SelectField';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
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
        <Router>
          <Grid>
            <header className="App-header">
              <Nav />
            </header>
            <div className="App-intro">
              <SelectField options={this.state.options} onChange={this.handleChange} />
              {this.state.selection}
                <div>
                  <Route exact path="/" render={() => <Home />} />
                  <Route path="/about" render={() => <About />} />
                  <Route path="/challenge" render={() => <Challenge />} />
                </div>
            </div>
          </Grid>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  
}

export default App;
