import React from "react";

import ItemList from '../item-list/item-list.component';
import items from '../item-list/item-data';

import './content-container.styles.scss';

const ContentContainer = () => (
    <div className="content-wrapper">
        <ItemList items={items}/>
        <ItemList items={items}/>
    </div>
);  

export default ContentContainer;