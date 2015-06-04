'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';
import WebAPIUtils from '../utils/WebAPIUtils';

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
  }
};
