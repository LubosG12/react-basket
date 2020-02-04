import React, { Fragment } from 'react';

import ShoppingItem from '../shopping-item/shopping-item.component'

import './item-list.styles.scss';

const ItemList = ({items, cartItems, addItemToCart}) => {
    
   return(
    <Fragment >   
    <div className="list">
    <div className="title">Shopping list</div>
        {
            items.length>0 ? 
            items.map(item => <div key={item.id} className="container">
                    <i className="fas fa-plus" onClick={() => addItemToCart(item)}>
                    </i><ShoppingItem item={item}/>
                 </div>)
            : <span className="empty-message">The shopping list is empty</span>
        }
    </div>
    </Fragment>
   )
}

export default ItemList;