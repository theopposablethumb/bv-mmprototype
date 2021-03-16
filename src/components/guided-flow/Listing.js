import React from 'react';
//import ProductDays from './ProductDays';
import TeamReviews from './TeamReviews';
import Reviews from './Reviews';
import Support from './Support'
import {carers} from './../../data';
import BvStamp from './BvStamp';

class Listing extends React.Component {

    supportRequiredCarers = () => {
        if (this.props.support) {
            let careTeam = carers.filter(carer => {return carer.team === this.props.location});
            let days = this.props.days;
            let daysSupport = days.map(day => <span>{day}, </span>);
            return (
                <>
                    <h3>You requested support at home on {daysSupport}</h3>
                    <p>The following members of our team in {this.props.location} are available to support you on these days, and can help you setup your {this.props.title}</p>
                    <ul className="flex carers">
                        {careTeam.map(carer => <li><figure><img src={carer.img} alt={carer.name} /><figcaption>{carer.name}</figcaption></figure></li>)}
                    </ul>
                </>
            )
        }
    }

    supportRequiredPrice = () => {
        if (this.props.support) {
            let amountOfDays = this.props.days.length;
            let supportPrice = amountOfDays * 50;
            return (
                <>
                    <p>{amountOfDays} days support at home</p>
                    <p className="price">£{supportPrice} <span>per week</span></p>
                </>
            )
        }
    }

    heading = () => {
        if (this.props.isFull) {
            return <h2>{this.props.title}</h2>;
        } else {
            return <h2 onClick={() => {this.props.viewListing(this.props.index)}} >{this.props.title}</h2>;
        }
    }

    back = () => {
        if (this.props.isFull) {
            return <button className="reset" onClick={() => {this.props.resetListing()}}>Back to all listings</button>;
        } else {
            return null;
        }
    }

    renderListing = () => {
        let rating = new Array(this.props.rating).fill('1');
        if (this.props.isFull) {
            return (
                <>
                    {this.back()}
                    <div className="flex">
                        <div className="image">
                            <img src={this.props.img} width="300" height="300" alt={this.props.title} />
                        </div>
                        <div className="product">
                            <div>
                                {this.heading()}
                                <ul className="rating">{rating.map(score => <li><span>{score}</span></li>)}<li>{rating.length} / 5</li></ul>
                                <p>{this.props.description}</p>
                                <BvStamp isFull={true} />

                            </div>
                            <div className="cta">
                                <p>{this.props.title}</p>
                                <p className="price">£{this.props.price}</p>
                                {this.supportRequiredPrice()}
                                <p className="call"><a onClick={(e) => {this.props.showCart(e, this.props.price)}}>Add to cart</a></p>
                            </div>
                        </div>
                    </div>
                    <Support location={this.props.location} product={this.props.title} />
                    <h3>Our recommendations</h3>
                    <p>BelleVie recommends {this.props.title} for customers who want support with {this.props.answers[0]} and {this.props.answers[1]}</p>
                    <TeamReviews location={this.props.location} />
                    <Reviews reviews={this.props.reviews} isFull={this.props.isFull} />
                </>
            );
        } else {
            return (
                <>
                    {this.back()}
                    <div className="listing">
                        <div className="flex">
                            <div className="image">
                                <img src={this.props.img} width="300" height="300" alt={this.props.title} />
                            </div>
                            <div className="col">
                                {this.heading()}
                                <ul className="rating">{rating.map(score => <li><span>{score}</span></li>)}</ul>
                                <p>{this.props.description}</p>
                                <BvStamp isFull={false} />
                                <Reviews reviews={this.props.reviews} isFull={this.props.isFull} />
                                <p className="price">£{this.props.price}</p>
                            </div>
                        </div>
                    </div>
                </>
            )
            
        }
    }

    render() {
        return this.renderListing();
    }
}

export default Listing;