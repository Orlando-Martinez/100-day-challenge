import React from 'react';
import './styles.scss';
import GitHub from '../../images/GitHub.png';
import linkedIn from '../../images/linkedIn.png';
import Social from '../../components/Social';

import RIT from '../../images/RIT.jpg';
import loadGoogleMapsApi from 'load-google-maps-api';

loadGoogleMapsApi().then(function (googleMaps) {
    new googleMaps.Map(document.querySelector('.map'), {
      center: {
        lat: 40.7484405,
        lng: -73.9944191
      },
      zoom: 12
    })
  }).catch(function (error) {
    console.error(error)
})

const About = () => (
    <div className='about'>
        <Social image={GitHub} url={'https://github.com/Orlando-Martinez'} />
        <Social image={linkedIn} url={'https://www.linkedin.com/in/orlando-martinez-42755850/'} />
        <div>
            <img src={RIT} className='rit' alt='rit' />
            <h2>Rochester Institue of Technology</h2>
            <p>Class of 2014</p>
            <p>Bachelors of Science New Media Interactive Development</p>
            <p>Minor Music Technology</p>
        </div>
        <div className='map'></div>
    </div>
);

export default About;