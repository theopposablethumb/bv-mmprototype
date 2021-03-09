import React from "react";
import SelectDays from './SelectDays';
import Team from './Team';

class CarePackage extends React.Component {
    state = {
        days: []
    }

    selectDays = (day) => {
        if(!this.state.days.includes(day)) { 
            this.setState(state => ({days: [...this.state.days, day] }));
        } else {
            let days =  this.state.days;
            const index = days.indexOf(day);
            days = days.splice(index, 1);
            this.setState(state => ({days: days}));
        }
    };

    renderDays = () => {
        if (this.state.days.length > 0)
        {
            return <p className="days">Weekly one hour visits on {this.state.days.map(day => <span>{day} </span>)}</p>
        }
    }

    renderPrice = () => {
        let price = this.state.days.length * 50;
        if (this.state.days.length > 0) {
            return (
                <>
                    <p>We estimate your care package will cost...</p>
                    <p className="price">£{price} <span>per week</span></p>
                </>
            )
        }
    }

    render() {
        return (
            <div className="care">
                <div>
                    <h2>Your care package</h2>
                    <p>We can help you live your best life at home. We understand that each person is unique, call us to discuss a care package that is unique and tailored to you. </p>
                    <p>Our fabulous Wellbeing Support Workers provide outstanding support with the practical aspects of living at home, while building a relationship with you. We believe that care should be person-centred. We take the time to get to know you, your interests and your aspirations.</p>
                </div>
                <div className="config">
                    <SelectDays selectDays={this.selectDays} />
                    <Team location={this.props.location} days={this.state.days} />
                </div>
                <div>
                    <h3>Book a free initial consultation</h3>
                    {this.renderPrice()}
                    {this.renderDays()}
                    <p className="call"><a>Call Jill to discuss your tailored care package</a></p>
                </div>
            </div>
        )
    } 
};

export default CarePackage;