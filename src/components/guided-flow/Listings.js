import React from 'react';
import Listing from './Listing';
import Cart from './Cart';
import {products} from '../../data';

class Listings extends React.Component {
    state = {
        listing: null,
        cart: false,
        cartTotal: []
    }

    setListing = (listIndex) => {
        this.setState(state => ({listing: listIndex}));
    }

    resetListing = () => {
        this.setState(state => ({listing: null}));
    }

    showCart = (e, price) => {
        e.preventDefault();
        price = parseFloat(price);
        this.setState(state => ({cart: true}));
        this.setState(state => ({cartTotal: [ ...this.state.cartTotal, price] }))
        console.log(this.state);
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

    viewListing = () => {
        let listings;
        if (this.props.type === 'service') {
            listings = products.filter(product => {return product.type === 'service'});
        } else {
            listings = products.filter(product => {return product.type === 'product'});
        };
        
        if (this.state.listing === null) {  
            document.querySelector('h2').scrollIntoView({ behavior: 'smooth' });
            return listings.map((product, index) => <Listing key={index} index={index} title={product.title} description={product.description} img={product.image} price={product.price} rating={product.rating} reviews={product.reviews} listing={this.state.listing} viewListing={this.setListing} />)
        } else {
            let i = this.state.listing;
            document.querySelector('h2').scrollIntoView({ behavior: 'smooth' });
            return <Listing title={listings[i].title} description={listings[i].description} img={listings[i].image} price={listings[i].price} rating={listings[i].rating} reviews={listings[i].reviews} support={this.props.support} location={this.props.location} days={this.props.days} answers={this.props.answers} isFull={true} showCart={this.showCart} resetListing={this.resetListing} />;
        }
    }

    render() {
        console.log(this.props);
        let answer1 = this.props.answers[0].split(" ")[0].toLowerCase();
        let answer2 = this.props.answers[1].split(" ")[0].toLowerCase();
        return (
            <>
                <h2>Recommended products and services to support you to live well at home in {this.props.location}</h2>
                <h4>Change your selection</h4>
                <ul className="selected">
                    <li><button onClick={() => this.props.back(answer1, this.props.answers[0])} >{this.props.answers[0]}</button></li>
                    <li><button onClick={() => this.props.back(answer2, this.props.answers[0])}>{this.props.answers[1]}</button></li>
                </ul>
                {this.viewListing()}
                {this.cart()}
            </>
        );
    }

}

export default Listings;