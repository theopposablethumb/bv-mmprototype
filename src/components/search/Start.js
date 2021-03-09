import React from 'react';
import Search from './Search';
import SearchListings from './SearchListings';
import Cart from './Cart';

class Start extends React.Component {
    state = {
        location: '',
        service: '',
        days: [],
        search: false,
        cart: false,
        cartTotal: []
    }

    setSearchTerms = (e, location, service) => {
        e.preventDefault();
        this.setState(state => ({ location: location, service: service, search: true }))
    }

    showCart = (e, price) => {
        e.preventDefault();
        price = parseFloat(price);
        this.setState(state => ({cart: true}));
        this.setState(state => ({cartTotal: [ ...this.state.cartTotal, price] }))
    }

    cart = () => {
        let items = this.state.cartTotal.length;
        if (this.state.cart) {
            let price = this.state.cartTotal.reduce((a, n) => a + n);
            console.log(items);
            console.log(price);
            console.log('show cart');
            return (
                <Cart items={items} price={price} />
            )
        }
    }

    displayListings = () => {
        if (this.state.search) {
            return <SearchListings location={this.state.location} showCart={this.showCart} />
        }
    }

    render() {
        console.log(this.state);
        return (
            <>
                <Search setSearchTerms={this.setSearchTerms} search={this.state.search} />
                {this.displayListings()}
                {this.cart()}
            </>
        )
    }
} 

export default Start;