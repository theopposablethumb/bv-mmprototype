import React from 'react';
import Listing from './Listing';
import {products} from '../../data';

class Listings extends React.Component {
    state = {listing: null}

    setListing = (listIndex) => {
        this.setState(state => ({listing: listIndex}));
    }

    resetListing = () => {
        this.setState(state => ({listing: null}));
    }

    viewListing = () => {
        if (this.state.listing === null) {
            return products.map((product, index) => <Listing key={index} index={index} title={product.title} description={product.description} img={product.image} price={product.price} rating={product.rating} reviews={product.reviews} listing={this.state.listing} viewListing={this.setListing} />)
        } else {
            let i = this.state.listing;
            return <Listing title={products[i].title} description={products[i].description} img={products[i].image} price={products[i].price} rating={products[i].rating} reviews={products[i].reviews} isFull={true} resetListing={this.resetListing} />;
        }
    }

    render() {
        return (
            <>
                <h2>Available services in {this.props.location}</h2>
                <p>Change your selection</p>
                <ul className="selected">
                    {this.props.answers.map(answer => <li key={answer}>{answer}</li>)}
                </ul>
                {this.viewListing()}
            </>
        );
    }

}

export default Listings;