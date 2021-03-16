import React from "react";
import SelectDays from './SelectDays';
import Team from './Team';
import ServicesOffered from './ServicesOffered';

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
                    <p>Your tailored support package will take into account the number of visits you would like a week/day.</p>
                    <p className="price"> Prices starting from £{price}</p>
                </>
            )
        }
    }

    render() {
        return (
            <div className="care">
                <div>
                    <h2>Support to Live Well at Home: Your All-Inclusive Package</h2>
                    <p>We can support you or your loved one to live well at home in {this.props.location}. Our all-inclusive packages are tailored to your needs and aspirations.</p>
                    <p>Our fabulous Wellbeing Support Workers provide outstanding support with the practical aspects of living at home, while building a relationship with you. We believe that care should be person-centred. We take the time to get to know you, your interests and your aspirations.</p>
                    <ServicesOffered /> 
                </div>
                <div className="config">
                    <SelectDays selectDays={this.selectDays} />
                    <Team location={this.props.location} days={this.state.days} />
                </div>
                <div>
                    <h3>Book a free initial consultation</h3>
                    <p>The first step is to book a free initial conversation with our Trusted Assessor who will find out more about you, your interests and how we can help. They will then build your bespoke package based on this information. </p>
                    {this.renderPrice()}
                    {this.renderDays()}
                    
                    <p className="call"><a>Call Jill to discuss your tailored care package</a></p>
                </div>
            </div>
        )
    } 
};

export default CarePackage;