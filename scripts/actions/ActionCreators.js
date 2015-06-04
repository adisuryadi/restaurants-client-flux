'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';
import WebAPIUtils from '../utils/WebAPIUtils';
import router from '../router.js';

import RestaurantStore from '../storage/RestaurantStore.js'

export default {
  requestBundle() {
    // TODO check if already loaded, before send AJAX request
    return WebAPIUtils.getBundle().then(function (res) {
      AppDispatcher.handleServerAction({
        type: ActionTypes.RECEIVE_BUNDLE,
        bundle: res
      });
    }).catch(function (reason) {
      AppDispatcher.handleServerAction({
        type: ActionTypes.RECEIVE_BUNDLE_FAILED,
        error: reason
      });
      console.log(reason);
    });
  },
  changeQueryFilter(type, id) {
    var query = { [type]: id };
    AppDispatcher.handleViewAction({
      type: ActionTypes.QUERY_FILTER_CHANGE,
      query: query
    });

    // TODO: this is not the way to do it
    query = {
      borough: RestaurantStore.getCurrentBorough()._id,
      cuisine: RestaurantStore.getCurrentCuisine()._id
    };
    router.transitionTo('root', {}, query);
  }
};
