import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

import List from '../List';

import './styles.scss';

const routes = [
    <Link to="/">Home</Link>,
    <Link to="/about">About</Link>
]

const Nav = () => (
    <nav className='nav'>
        <List items={routes} inline/>
    </nav>
);

export default Nav;