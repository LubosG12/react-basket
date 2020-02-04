import React, { Fragment } from 'react';

import ShoppingItem from '../shopping-item/shopping-item.component';

import './cart.styles.scss'

const Cart = ({cartItems}) => (
<Fragment >   
    <div className="list">
    <div className="title">Shopping list</div>
        {
            cartItems.length>0 ? 
            cartItems.map(item => <div key={item.id} className="container">
                    <i className="fas fa-minus"></i>
                    <ShoppingItem item={item}/>
                 </div>)
            : <span className="empty-message">The shopping list is empty</span>
        }
    </div>
    </Fragment>
)

export default Cart;