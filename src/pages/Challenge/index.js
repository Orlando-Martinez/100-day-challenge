import React, { Component } from 'react';

import Countdown from '../../components/Countdown';
import List from '../../components/List';
import SelectField from '../../components/SelectField';
import WakaTime from '../../components/WakaTime';

const languages = "https://wakatime.com/share/@2cc94f79-4ce2-4429-8e29-a99e8f0d0f2d/c5f9ed74-c49f-44a2-9f1a-4f8717f31a21.svg";
const activity = "https://wakatime.com/share/@2cc94f79-4ce2-4429-8e29-a99e8f0d0f2d/7228fc51-99c7-4014-a0be-7c41d61365c5.svg";

export class Challenge extends Component {
    constructor(props){
        super(props);
        this.state = {
            rules: ['Rule 1', 'Rule 2', 'Rule 3'],
            options: [
                {text: 'Languages', value: 'languages'},
                {text: 'Activity', value: 'activity'},
            ]
        }
    }

    handleChange = (event) => {
        this.setState({
          selection: event.target.value
        })
    }

    today = () => {
        var date = new Date();
        var month = date.getUTCMonth() + 1;
        var day = date.getUTCDate();
        var year = date.getUTCFullYear();
    
        var today = year + "/" + month + "/" + day;
        return today;
    }
    
    render = () => (
        <div>
            <h1 className="App-title">100-Day Coding Challenge</h1>
            <Countdown start={this.today()} end={'09-09-2018'} />
            <List items={this.state.rules}/>
            <SelectField options={this.state.options} onChange={this.handleChange} />
            <WakaTime url={languages} />
            <WakaTime url={activity} />
        </div>
    )
}

export default Challenge;