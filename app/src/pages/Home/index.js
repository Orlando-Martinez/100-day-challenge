import React from 'react'
import './styles.scss'

import searchIcon from '../../images/search.svg'
import { Row, Col } from 'react-flexbox-grid';

const Home = () => (
    <div className='Home'>Home
        <img src={searchIcon} className='search' />
        <Row className='myRow'>
          <Col xs={12} md={4}>
            Col 1
          </Col>
          <Col xs={12} md={4}>
            Col 2
          </Col>
          <Col xs={12} md={4}>
            Col 3
          </Col>
        </Row>
    </div>
);

export default Home;