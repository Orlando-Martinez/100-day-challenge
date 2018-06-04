import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../../pages/Home'
import About from '../../pages/About'
import List from '../List'

const routes = [
    <Link to="/">Home</Link>,
    <Link to="/about">About</Link>
]

const Nav = () => (
    <Router>
      <div>
          <List items={routes} />
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
);

export default Nav;