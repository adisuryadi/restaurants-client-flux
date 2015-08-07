import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

const CHANGE_EVENT = 'change';

//  TODO: move this to helper module.
let idx = 0;
/**
 * Return autoincremented number on every calls
 * @return {Number}
 */
function uniqueId() {
  idx += 1;
  return idx;
}

/**
 * There seems a bug on eslint that not detects
 * these two variables below is being used in this page.
 */
/*  eslint-disable prefer-const */
let boroughs = {
  '0': {
    '_id': 'Any Borough',
  },
};
let cuisines = {
  '0': {
    '_id': 'Any Cuisine',
  },
};
/*  eslint-enable prefer-const */

//  Defaults
let currentBorough = {'_id': 'Any Borugh'};
let currentCuisine = {'_id': 'Any Cuisine'};

let restaurants = {};


const RestaurantStore = Object.assign({
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
    return boroughs;
  },

  getCuisines() {
    return cuisines;
  },

  getCurrentBorough() {
    return currentBorough;
  },

  getCurrentCuisine() {
    return currentCuisine;
  },

  getRestaurants() {
    return restaurants;
  },
}, EventEmitter.prototype);


AppDispatcher.register(payload => {
  const action = payload.action;
  let loaded;

  switch (action.type) {
  case 'LOAD_BUNDLE_SUCCESS':
    const exitsBoroughs = Object.values(boroughs).map(item => item._id);
    loaded = 0;

    action.bundle.boroughs.forEach(borough => {
      if (exitsBoroughs.indexOf(borough._id) < 0) {
        boroughs[uniqueId()] = borough;
      }
      loaded += 1;
    });


    const exitsCuisines = Object.values(cuisines).map(item => {
      return item._id;
    });

    action.bundle.cuisines.forEach(cuisine => {
      if (exitsCuisines.indexOf(cuisine._id) < 0) {
        cuisines[uniqueId()] = cuisine;
      }
      loaded += 1;
    });

    if (loaded) {
      RestaurantStore.emitChange();
    }
    break;

  case 'LOAD_RESTAURANTS_SUCCESS':
    loaded = 0;

    restaurants = {};
    action.restaurants.forEach(restaurant => {
      restaurants[restaurant._id] = restaurant;
      loaded += 1;
    });

    if (loaded) {
      RestaurantStore.emitChange();
    }
    break;

  case 'QUERY_FILTER_CHANGE':
    Object.keys(action.query).map(param => {
      let match = false;
      let items;
      switch (param) {
      case 'cuisine':
        items = Object.values(cuisines);
        currentCuisine = items.find(item => (item._id === action.query[param]));
        match = true;
        break;
      case 'borough':
        items = Object.values(boroughs);
        currentBorough = items.find(item => (item._id === action.query[param]));
        match = true;
        break;
      default:
      }
      if (match) {
        RestaurantStore.emitChange();
      }
    });
    break;
  default:
  }
});

export default RestaurantStore;
