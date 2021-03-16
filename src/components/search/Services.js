import React from 'react';
import {services} from '../../data';

class Services extends React.Component {
    state= {active: 0}

    componentDidMount() {
        this.interval = setInterval(() => {this.nextSlide()}, 5000);
      }
      
      componentWillUnmount() {
        clearInterval(this.interval);
      }


    prevSlide = () => {
        let index = this.state.active;
        let length = services.length;
        
        if(index < 1) {
            index = length - 1;
        } else {
            index--;
        }
        
        this.setState(state => ({active: index}));
        console.log(this.state);
    }

    nextSlide = () => {
        let index = this.state.active;
        let length = services.length;
        
        if(index === length - 1) {
            index = 0;
        } else {
            index++;
        }
            
        this.setState(state => ({ active: index}));
        console.log(this.state);
    }

    activeSlide = (index) => {
        console.log(index);
        if (index === this.state.active) {
            return 'active slide';
        } else {
            return 'slide';
        }
    }
    

    render() {
        return (
            <ul className="services">
                {services.map((service, index) => {return( 
                    <li key={index} className={this.activeSlide(index)}>
                        <figure>
                            <img src={service.img} alt={service.title}/>
                            <figcaption>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </figcaption>
                        </figure>
                    </li> 
                ) })}
                <li className="backSlide" onClick={() => {this.nextSlide()}} > &nbsp; </li>
                <li className="forwardSlide" onClick={() => {this.prevSlide()}} > &nbsp; </li>
            </ul>
        )
    }
}

export default Services;