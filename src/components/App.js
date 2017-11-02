import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

export default class App extends Component {
  state = {
    filters: [],
    currentFilter: null,
    fruit: []
  }

  componentWillMount() {
    this.fetchFilters();
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }


    fetchFilters = () => {
      fetch('/api/fruit_types')
        .then(response => response.json())
        .then(filters => this.setState({ filters }));
    }

  render() {
    return (<FruitBasket filters={this.state.filters} currentFilter={this.state.currentFilter} fruit={this.state.fruit} onFilterChange={this.handleFilterChange}/>)
  }
}
