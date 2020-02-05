import React from 'react';

import './filter-bar.styles.scss';

const FilterBar = ({ handleChange}) => (
            <div className="search-bar">
                <input type="text" className="input" placeholder="Search..." onChange={handleChange}/>
            </div>
 )
    


export default FilterBar;