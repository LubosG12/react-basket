import React from 'react';

import './shopping-item.styles.scss';

const ShoppingItem = ({item}) => (
    <div className="item">
        <span className="name">{item.name}</span> 
        <span className="price">{item.price}$</span>   
    </div>
)

export default ShoppingItem;