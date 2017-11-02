import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.onFilterChange} filters={props.filters}/>
      <FilteredFruitList
        filter={props.currentFilter} fruit={props.fruit}/>
    </div>
  );
}

FruitBasket.defaultProps = {
  filters: [],
  fruit: [],
  currentFilter: "all",
  updateFilterCallback: null
}

export default FruitBasket;
