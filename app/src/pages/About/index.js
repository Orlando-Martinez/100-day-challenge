import React from 'react';
import './styles.scss';
import GitHub from '../../images/GitHub.png';

const About = () => (
    <div className='about'>
        <div>
            <a href="https://github.com/Orlando-Martinez">
                <img src={GitHub} />
            </a>
        </div>
    </div>
)

export default About;