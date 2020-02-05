import React, { useState } from "react";

import ItemList from '../item-list/item-list.component';
import Cart from '../cart/cart.component';
import items from '../item-list/item-data';

import './content-container.styles.scss';

class ContentContainer extends React.Component {

    state = {
        cartItems: [],
        totalPrice: 0
    }

    addItemToCart = async(item) => {
        if (this.state.cartItems.includes(item)) {
            let index = this.state.cartItems.indexOf(item);
            this.state.cartItems[index].quantity+= 1;
        } else {
            let updatedCartItems = this.state.cartItems.concat(item);
            await this.setState({cartItems: updatedCartItems})
        }            
        this.getTotalPrice()
    }

    removeItemFromCart = async(item) => {
        let index = this.state.cartItems.indexOf(item);
        this.state.cartItems[index].quantity= 1;
        let updatedCartItems = this.state.cartItems.filter(filteredItem => filteredItem.name!==item.name)
        await this.setState({cartItems: updatedCartItems})
        this.getTotalPrice()
    }

    getTotalPrice = async() => {
        let total = 0;
        await this.state.cartItems.forEach(item => total= total + item.price*item.quantity)
        total = total.toFixed(2)
        this.setState({totalPrice: total})
    }


    render() {
    return (
        <div className="content-wrapper">
        <ItemList items={items} cartItems={this.state.cartItems} addItemToCart={this.addItemToCart}/>
        <Cart cartItems={this.state.cartItems} removeItemFromCart={this.removeItemFromCart} totalPrice={this.state.totalPrice}/>
        </div>
    )}
};  

export default ContentContainer;