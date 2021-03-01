import React from 'react';

class Listing extends React.Component {

    allReviews = () => {
        let reviews = this.props.reviews;
        if (this.props.isFull) {
            return reviews.map(review => <li><p>{review.review}</p><p><span>{review.author}</span></p></li>);
        } else {
            return <li>{this.props.reviews[0].review} <span>{this.props.reviews[0].author}</span></li>;
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

    render() {
        let rating = new Array(this.props.rating).fill('1');
        console.log(this.props);
        return (
            <>
            {this.back()}
            <div className="listing">
                <div className="image">
                    <img src={this.props.img} alt={this.props.title} />
                </div>
                <div>
                    {this.heading()}
                    <ul className="rating">{rating.map(score => <li><span>{score}</span></li>)}</ul>
                    <p>{this.props.description}</p>
                    <ul className="reviews">{this.allReviews()}</ul>
                    <p>£{this.props.price}</p>
                </div>
            </div>
            </>
        )
    }
}

export default Listing;