'use strict';

import React from 'react';

import Toolbar from './components/Toolbar.react.js';
import ListItems from './components/ListItems.react.js';

import RestaurantStore from './storage/RestaurantStore.js'
import ActionCreators from './actions/ActionCreators.js'


function _getStoreState() {
  return {
    boroughs: RestaurantStore.getBoroughs(),
    cuisines: RestaurantStore.getCuisines(),
    current_borough: RestaurantStore.getCurrentBorough(),
    current_cuisine: RestaurantStore.getCurrentCuisine()
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = _getStoreState();
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    RestaurantStore.addChangeListener(this._onChange);
    ActionCreators.requestBundle();
  }

  componentWillUnMount() {
    RestaurantStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
        <div className="ui center aligned page grid">
          <div className="twelve wide left aligned column">
            <div className="main container">
              <Toolbar {...this.state} />
              <ListItems />
            </div>
          </div>
        </div>
    );
  }

  _onChange() {
    this.setState(_getStoreState());
  }
}

export default App;
