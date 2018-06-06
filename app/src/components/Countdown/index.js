import React, { Component } from 'react';

class Countdown extends Component {
    daysLeft = () => {
        var startDate = new Date(this.props.start);
        var endDate = new Date(this.props.end);
        var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
        var daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
        const result = this.isTimeUp(daysLeft) ? 'Congratulations! You completeted the challenge!' : `${daysLeft} days left`
        return result;
    }

    isTimeUp = (daysLeft) => daysLeft === 0

    render() {
        return (
            <div>
                {this.daysLeft()}
            </div>
        )    
    }
}

export default Countdown;