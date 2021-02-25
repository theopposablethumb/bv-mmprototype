import React from 'react';

class Listing extends React.Component {
    state = {support: false};
    
    supportRequired() {
        console.log(this.props.answers[2]);
        if (this.props.answers[2] === 'Yes') {
            this.setState(state => ({support: true}))
        }
    }

    renderSupport() {
        if (this.state.support === true) {
            return (
                <>
                    <p><strong>Support is required on</strong></p>
                    <ul className="days">
                        {this.props.days.map(day => <li>{day.slice(0, 2)}</li>)}
                    </ul>
                </>
            )
        }
    }

    componentDidMount() {
        this.supportRequired();
    }

    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <div className="listing">
                <img src="./imgs/bvmm.jpg" width="200" height="200" alt="two dudes standing in a garden and drinking tea" />
                <div>
                    <h2>BelleVie {this.props.answers[0]} package</h2>
                    <div className="left">
                        <p><strong>I would like help with...</strong></p>
                        <ul>
                            <li>{this.props.answers[0]}</li>
                            <li>{this.props.answers[1]}</li>
                        </ul>
                        {this.renderSupport()}
                    </div>
                    <div className="right">
                        <p className="price">Price £150 <span>per week</span></p>
                        <p className="call"><a href="tel: 012535 355 570">Call us: 012535 355 570</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Listing;