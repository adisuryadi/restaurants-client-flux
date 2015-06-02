'use strict';

import { assign, each, isFunction } from 'lodash';
import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

const CHANGE_EVENT = 'change';

let RestaurantStore = assign({
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(fn) {
    this.on(CHANGE_EVENT, fn);
  },

  removeChangeListener(fn) {
    this.removeListener(CHANGE_EVENT, fn);
  }
}, EventEmitter.prototype);

RestaurantStore.dispatchToken = AppDispatcher.register(function (payload) {
  const action = payload.action;

  switch (action.type) {
    case 'RECEIVE_BUNDLE':
      //RestaurantStore.emitChange();
      break;
  }
});

export default RestaurantStore;
