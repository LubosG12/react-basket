import React, { useState } from "react";

import ItemList from '../item-list/item-list.component';
import Cart from '../cart/cart.component';
import items from '../item-list/item-data';

import './content-container.styles.scss';

class ContentContainer extends React.Component {

    state = {
        cartItems: []
    }

    addItemToCart = (item) => {
        let updatedCartItems = this.state.cartItems.concat(item);
        this.setState({cartItems: updatedCartItems})
    }

    render() {
    return (
        <div className="content-wrapper">
        <ItemList items={items} cartItems={this.state.cartItems} addItemToCart={this.addItemToCart}/>
        <Cart cartItems={this.state.cartItems}/>
        </div>
    )}
};  

export default ContentContainer;