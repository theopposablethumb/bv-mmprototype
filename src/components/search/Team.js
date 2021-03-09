import React from 'react';
import {carers} from './../../data';

class Team extends React.Component {
    
    renderCarers = () => {
        let careTeam = carers.filter(carer => {return carer.team === this.props.location});
        let available = [];

        careTeam.forEach(carer => {
            let canWorkThatDay = this.props.days.some(day => carer.days.includes(day));
            if (canWorkThatDay) {
                available = [...available, carer];
            }
        });

        if(!available.length) {
            return careTeam.map(carer => <li key={carer.name}><figure><img src={carer.img} alt={carer.name} /><figcaption>{carer.name}</figcaption></figure></li>);
        } else {
            return available.map(carer => <li key={carer.name}><figure><img src={carer.img} alt={carer.name} /><figcaption>{carer.name}</figcaption></figure></li>)
        }
    } 
    
    render() {
        return (
            <>
                <h3>The following members of our team are available to support you in {this.props.location}</h3>
                <ul className="flex carers">
                    {this.renderCarers()}
                </ul>
            </>
        );
    }
    
};

export default Team;