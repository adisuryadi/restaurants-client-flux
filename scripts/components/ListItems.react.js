'use strict';

import React, { PropTypes } from 'react';

import RestaurantStore from '../storage/RestaurantStore.js'
import ActionCreators from '../actions/ActionCreators.js'

function _getStoreState() {
  return {
    items: RestaurantStore.getRestaurants()
  };
}

class ListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    RestaurantStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    RestaurantStore.removeChangeListener(this._onChange);
  }
  
  render() {
    return (
      <div className="ui divided list">
        {this.state.items.map(item => {
          return (
            <div className="item" key={item._id}>
              <i className="huge map marker icon"></i>
              <div className="content">
                <div className="header">{item.name}</div>
                <div className="description"><span>{item.address.street},&nbsp;<a href="#">{item.borough},&nbsp;</a><a href="#">{item.address.zipcode}</a></span></div>
                <div className="extra"><a href="#"><em>{item.cuisine}</em></a></div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  _onChange() {
    this.setState(_getStoreState());    
  }
}


export default ListItems;
