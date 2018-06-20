import React from 'react';
import './styles.scss';
import GitHub from '../../images/GitHub.png';
import linkedIn from '../../images/linkedIn.png';
import Social from '../../components/Social';
const About = () => (
    <div className='about'>
        <Social image={GitHub} url={'https://github.com/Orlando-Martinez'} />
        <Social image={linkedIn} url={'https://www.linkedin.com/in/orlando-martinez-42755850/'} />
    </div>
);

export default About;