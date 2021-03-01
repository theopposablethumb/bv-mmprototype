import React from 'react';

class Days extends React.Component {
    state = {active: []}

    activeDay = (day) => {
        this.setState(state => ({active: [...this.state.active, day]}));
    }

    selectDays = (day) => {
        this.props.selectDays(day);
        this.activeDay(day);
    }

    nextLevelDays = (answer, e) => {
        e.preventDefault();
        this.props.nextLevel(answer);
    }

    render() {
        return (
            <div className="week">
                <ul>
                    {this.props.list.map(list => <li key={list.name}><button className={this.state.active.includes(list.title) ? 'selected' : ''} onClick={() => {this.selectDays(list.title)}}>{list.title}</button></li>)}
                </ul>
                <button className="next right" onClick={(e) => this.nextLevelDays(this.props.list.title, e)}>Next</button>
            </div>
        )
    }
}

export default Days;