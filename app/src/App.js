import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid, } from 'react-flexbox-grid';
import Home from './pages/Home';
import About from './pages/About';
import Challenge from './pages/Challenge';

import Nav from './components/Nav';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
    };
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
