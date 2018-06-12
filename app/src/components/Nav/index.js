import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';

import List from '../List';


import './styles.scss';

const routes = [
    <Link to="/">Home</Link>,
    <Link to="/about">About</Link>
]

const Nav = () => (
    <nav className='nav'>
        <Row className='myRow'>
          <Col xs={12} lgOffset={9} lg={3}>
              <List items={routes} inline/>
          </Col>
        </Row>
    </nav>
);

export default Nav;