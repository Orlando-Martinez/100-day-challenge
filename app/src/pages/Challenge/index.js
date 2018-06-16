import React, { Component } from 'react';
import Countdown from '../../components/Countdown';
import List from '../../components/List';

export class Challenge extends Component {
    constructor(props){
        super(props);
        this.state = {
            rules: ['Rule 1', 'Rule 2', 'Rule 3'],
        }
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
        </div>
    )
}

export default Challenge;