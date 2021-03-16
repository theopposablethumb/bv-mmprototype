import React from 'react';
import SearchListing from './SearchListing';
import DisplayMap from './DisplayMap';
import CarePackage from './CarePackage';
import Services from './Services';
import {products} from '../../data';

class SearchListings extends React.Component {
    state= {days: []}

    products = products;

    selectDays = (day) => {
        this.setState(state => ({days: [ ...this.state.days, day ] }));
    };
    
    render() {
        return (
            <>
                <DisplayMap coords={this.props.location.coords} />
                <CarePackage location={this.props.location.town}  days={this.state.days} />
                <Services />
            </>
        )
    }
    
}

export default SearchListings;