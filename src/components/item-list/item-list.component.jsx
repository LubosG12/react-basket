import React, { Fragment } from 'react';

import ShoppingItem from '../shopping-item/shopping-item.component'

import './item-list.styles.scss';

const ItemList = ({items}) => (
    <Fragment >
       
    <div className="list">
    <div className="title">Shopping list</div>
        {
            items.length>0 ? 
            items.map(item => <ShoppingItem key={item.id} item={item}/>)
            : <span className="empty-message">The shopping list is empty</span>
        }
    </div>
    </Fragment>
)

export default ItemList;