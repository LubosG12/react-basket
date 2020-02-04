import React from 'react';

import './shopping-item.styles.scss';

const ShoppingItem = ({item}) => (
    <div className="item">
        <i class="fas fa-plus" onClick={clearImmediate()}></i>
        <span className="name">{item.name}</span> 
        <span className="price">{item.price}$</span>   
    </div>
)

export default ShoppingItem;