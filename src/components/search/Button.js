import React from 'react';

class Button extends React.Component {
    state = {
        active: false
    }

    clickHandler = (e) => {
        e.preventDefault();
        this.props.click(this.props.dayName);
        let active = this.state.active;
        this.setState(state => ({active: !active})) 
    }

    render() {
        return (
            <button className={this.state.active ? 'selected' : null} onClick={(e) => this.clickHandler(e)}>{this.props.dayTitle}</button>
        )
    }
};

export default Button;