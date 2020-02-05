import React from 'react';

import './shopping-item-in-list.styles.scss';

const ShoppingItemFromList = ({item}) => (
    <div className="item">
        <span className="name">{item.name}</span> 
        <span className="price">{item.price.toFixed(2)}$</span>   
    </div>
)

export default ShoppingItemFromList;