import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';

import './styles.scss';

const Nav = () => (
    <nav className='nav'>
        <Row>
            <Col lg={4}>
                <h1 className='name'>Orlando Martinez</h1>
            </Col>
            <Col lg={8}>
                <ul className='routes'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/challenge">Challenge</Link></li>
                </ul>
            </Col>
        </Row>
    </nav>
);

export default Nav;