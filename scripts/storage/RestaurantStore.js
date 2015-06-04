'use strict';

import { assign, each, isFunction, keys, map, pick } from 'lodash';
import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

const CHANGE_EVENT = 'change';

var _boroughs = {
  'Any Borough': {
    '_id': 'Any Borough'
  }
};
var _cuisines = {
  'Any Cuisine': {
    '_id': 'Any Cuisine'
  }
};
var _current_borough = { '_id': 'Any Borough' };
var _current_cuisine = { '_id': 'Any Cuisine' };

var _restaurants = [];

let RestaurantStore = assign({
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(fn) {
    this.on(CHANGE_EVENT, fn);
  },

  removeChangeListener(fn) {
    this.removeListener(CHANGE_EVENT, fn);
  },

  getBoroughs() {
    return _boroughs;
  },

  getCuisines() {
    return _cuisines;
  },

  getCurrentBorough() {
    return _current_borough;
  },

  getCurrentCuisine() {
    return _current_cuisine;
  },

  getRestaurants() {
    return _restaurants;
  }
}, EventEmitter.prototype);

RestaurantStore.dispatchToken = AppDispatcher.register(function (payload) {
  const action = payload.action;

  switch (action.type) {
    case 'RECEIVE_BUNDLE':
        action.bundle.boroughs.forEach(function (borough) {
          _boroughs[borough._id] = borough;
        });
        action.bundle.cuisines.forEach(function (cuisine) {
          _cuisines[cuisine._id] = cuisine;
        });
        RestaurantStore.emitChange();
      break;

    case 'RECEIVE_RESTAURANTS':
        _restaurants = action.restaurants;
        RestaurantStore.emitChange();
      break;

    case 'QUERY_FILTER_CHANGE':
        keys(action.query).map(function (param) {
          let match = false;
          switch (param) {
            case 'cuisine':
              _current_cuisine = pick(_cuisines, action.query[param])[action.query[param]];
              match = true;
              break;
            case 'borough':
              _current_borough = pick(_boroughs, action.query[param])[action.query[param]];
              match = true;
              break;
          }
          if (match) {
            RestaurantStore.emitChange();
          }
        });
      break;
  }
});

export default RestaurantStore;
