'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes } from '../constants/AppConstants';
import WebAPIUtils from '../utils/WebAPIUtils';

export default {
  requestBundle() {
    // TODO check if already loaded, before send AJAX request
    return WebAPIUtils.getBundle();
  }
};
