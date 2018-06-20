import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
          <div>
            <header className="App-header">
              <Nav />
            </header>
            <div className="App-intro">
                <Route exact path="/" render={() => <Home />} />
                <Route path="/about" render={() => <About />} />
                <Route path="/challenge" render={() => <Challenge />} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  
}

export default App;
