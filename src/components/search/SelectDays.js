import React from 'react';
import Button from './Button';
import {week} from './../../data';

class SelectDays extends React.Component {
    state = {
        days: [],
    }

    week = week;

    selectDays = (day) => {
        if(!this.state.days.includes(day)) { 
            this.setState(state => ({days: [...this.state.days, day] }));
            this.props.selectDays(day); 
        } else {
            let days =  this.state.days;
            const index = days.indexOf(day);
            days = days.splice(index, 1);
            this.setState(state => ({days: days}));
        }
    }

    render() {
        return (
            <div className="week">
                <h3>When would you like support?</h3>
                <ul>
                    {this.week.map(day => <li key={day.name}><Button click={this.selectDays} dayName={day.name} dayTitle={day.title} /></li>)}
                </ul>
            </div>
        )
    }
}

export default SelectDays;