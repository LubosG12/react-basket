import React, { Fragment } from 'react';

import ShoppingItem from '../shopping-item/shopping-item.component';

import './cart.styles.scss'

const Cart = ({cartItems, removeItemFromCart, totalPrice}) => (
<Fragment >   
    <div className="list">
    <div className="title">Shopping cart</div>
        {
            cartItems.length>0 ? 
            cartItems.map(item => <div key={item.id} className="container">
                    <i className="fas fa-minus" onClick={() => removeItemFromCart(item)}></i>
                    <ShoppingItem item={item}/>
                 </div>)
            : <span className="empty-message">Your cart is empty</span>
        }
        {

            cartItems.length>0 ? <p className="total-price">Your cart total is: {totalPrice}$</p> : null
        }
    </div>
    </Fragment>
)

export default Cart;