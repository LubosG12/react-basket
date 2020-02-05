import React, { Fragment } from 'react';

import ShoppingItemFromList from '../shopping-item-in-list/shopping-item.in-list.component';

import './item-list.styles.scss';
import FilterBar from '../filter-bar/filter-bar.component';
import { render } from '@testing-library/react';

class ItemList extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            searchInput: ''
        }
    }

    handleChange = (event) => {
        this.setState({searchInput: event.target.value})
        console.log(this.state.searchInput);

    }

    

   render() {
    const { items, addItemToCart } = this.props;
    return(
        <Fragment >  
        <div className="list">
        <div className="title">Shopping list</div>
        <FilterBar handleChange={this.handleChange}/> 
            <div className="item-list">
            {
                items.length>0 ? 
                items.filter(item => item.name.toLowerCase().includes(this.state.searchInput)).map(item => <div key={item.id} className="container">
                <i className="fas fa-plus" onClick={() => addItemToCart(item)}>
                </i><ShoppingItemFromList item={item}/>
             </div>)
                : <span className="empty-message">The shopping list is empty</span>
            }
            </div>
        </div>
        </Fragment>
    )
   }
}

export default ItemList;