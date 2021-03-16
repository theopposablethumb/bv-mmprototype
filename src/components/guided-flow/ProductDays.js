import React from 'react';
import {week} from './../../data';

class ProductDays extends React.Component {
    state = {active: null, days: week}

    activeDay = (day) => {
        this.setState(state => ({active: day}));
    }

    selectDays = (e, day) => {
        e.preventDefault();
        this.activeDay(day);
        this.props.day(day);
    }

    selectedDay = (list) => {
        if (this.state.active) {
            return this.state.active.includes(list.title) ? 'selected' : '';
        }  
    }

    render() {
        return (
            <div className="week">
                <h4>When would you like one of our Wellbeing Support team to help set up your {this.props.product}?</h4>
                <ul>
                    {this.state.days.map(list => <li key={list.name}><button className={this.selectedDay(list)} onClick={(e) => {this.selectDays(e, list.title)}}>{list.title}</button></li>)}
                </ul>
            </div>
        )
    }
}

export default ProductDays;