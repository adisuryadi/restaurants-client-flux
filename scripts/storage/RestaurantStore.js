'use strict';

import { assign, each, isFunction, keys, map, pick, uniqueId, find, values } from 'lodash';
import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

const CHANGE_EVENT = 'change';

var _boroughs = {
  '0': {
    '_id': 'Any Borough'
  }
};
var _cuisines = {
  '0': {
    '_id': 'Any Cuisine'
  }
};
var _current_borough = { '_id': 'Any Borugh' };
var _current_cuisine = { '_id': 'Any Cuisine' };

var _restaurants = {};


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



AppDispatcher.register(function (payload) {
  const action = payload.action;

  switch (action.type) {
    case 'LOAD_BUNDLE_SUCCESS':
        let exits_boroughs = _.values(_boroughs).map((item) => {return item._id;});
        let loaded = 0;

        action.bundle.boroughs.forEach(function (borough) {
          if (exits_boroughs.indexOf(borough._id) < 0) {
            _boroughs[uniqueId()] = borough;
          } else {
            // TODO: update borough
          }
          loaded += 1;
        });


        let exits_cuisines = _.values(_cuisines).map((item) => {return item._id;});

        action.bundle.cuisines.forEach(function (cuisine) {
          if (exits_cuisines.indexOf(cuisine._id) < 0) {
            _cuisines[uniqueId()] = cuisine;
          } else {
            // TODO: update borough
          }
          loaded += 1;
        });

        if (loaded) {
          RestaurantStore.emitChange();
        }
      break;

    case 'LOAD_RESTAURANTS_SUCCESS':
        let loaded = 0;

        _restaurants = {};
        action.restaurants.forEach(function (restaurant) {
          _restaurants[restaurant._id] = restaurant;
          loaded += 1;
        });

        if (loaded) {
          RestaurantStore.emitChange();
        }
      break;

    case 'QUERY_FILTER_CHANGE':
        keys(action.query).map(function (param) {
          let match = false;
          switch (param) {
            case 'cuisine':
              _current_cuisine = find(values(_cuisines), (item) => { return item._id === action.query[param] });
              match = true;
              break;
            case 'borough':
              _current_borough = find(values(_boroughs), (item) => { return item._id === action.query[param] });
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
