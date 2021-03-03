import React from 'react';
import {week} from './../../data';

class ProductDays extends React.Component {
    state = {active: [], days: week}

    activeDay = (day) => {
        this.setState(state => ({active: [...this.state.active, day]}));
    }

    selectDays = (day) => {
        this.activeDay(day);
    }

    /*nextLevelDays = (answer, e) => {
        e.preventDefault();
    } */

    render() {
        return (
            <div className="week">
                <h3>Would you like a carer to help you install your </h3>
                <ul>
                    {this.state.days.map(list => <li key={list.name}><button className={this.state.active.includes(list.title) ? 'selected' : ''} onClick={() => {this.selectDays(list.title)}}>{list.title}</button></li>)}
                </ul>
                <button className="next right">Next</button>
            </div>
        )
    }
}

export default ProductDays;