import React from 'react';
import SearchListing from './SearchListing';
import DisplayMap from './DisplayMap';
import CarePackage from './CarePackage';
import {products} from '../../data';

class SearchListings extends React.Component {
    state= {days: []}

    products = products;

    displayListings = () => {
        return products.map(product => <SearchListing title={product.title} rating={product.rating} description={product.description} reviews={product.reviews} price={product.price} img={product.image} showCart={this.props.showCart} />)
    }

    selectDays = (day) => {
        this.setState(state => ({days: [ ...this.state.days, day ] }));
    };
    
    render() {
        return (
            <>
                <DisplayMap coords={this.props.location.coords} />
                <CarePackage location={this.props.location.town}  days={this.state.days} />
                <h2>Looking for something extra?</h2>
                <p>We offer a range of products that can help you live your best life at home. Our care teams will even deliver and help you set up your new purchase.</p>
                {this.displayListings()}
            </>
        )
    }
    
}

export default SearchListings;