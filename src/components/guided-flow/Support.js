import React from 'react';
import ProductDays from './ProductDays';
import CareTeam from './CareTeam';

class Support extends React.Component {
    state = {day: null};

    day = (day) => {
        this.setState(state => ({day: day}));
    }

    render() {
        console.log(this.props);
        return (
            <div className="care">
                <div>
                    <h3>Would you like help from our Wellbeing Support Workers to set up your product?</h3>
                    <p>Our local team of Wellbeing Support Workers can deliver your product and help you set it up. We can also support you or your loved one to live well at home in {this.props.location}. Our fabulous Wellbeing Support Workers provide outstanding support with the practical aspects of living at home, while building a relationship with you. We believe that care should be person-centred. We take the time to get to know you, your interests and your aspirations.</p>
                    <ProductDays product={this.props.product} day={this.day} />
                    <CareTeam location={this.props.location} day={this.state.day} />
                </div>
            </div>
        )
    }
    
}

export default Support;