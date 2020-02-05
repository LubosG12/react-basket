import React from 'react';

import './shopping-item.styles.scss';

const ShoppingItem = ({item}) => (
    <div className="item">
        <span className="name">{item.name} x {item.quantity}</span> 
        <span className="price">{(item.price * item.quantity).toFixed(2)}$</span>   
    </div>
)

export default ShoppingItem;