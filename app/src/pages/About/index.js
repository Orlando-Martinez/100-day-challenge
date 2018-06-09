import React from 'react'
import WakaTime from '../../components/WakaTime';
import './styles.scss'

const languages = "https://wakatime.com/share/@2cc94f79-4ce2-4429-8e29-a99e8f0d0f2d/c5f9ed74-c49f-44a2-9f1a-4f8717f31a21.svg";
const activity = "https://wakatime.com/share/@2cc94f79-4ce2-4429-8e29-a99e8f0d0f2d/7228fc51-99c7-4014-a0be-7c41d61365c5.svg"

const About = () => (
    <div className='about'>
        <div className="languagesWrapper">
            <WakaTime url={languages} />
        </div>
        <div className="activityWrapper">
            <WakaTime url={activity} />
        </div>
    </div>
)

export default About;