'use strict';

import { Dispatcher } from 'flux';
import Constants from '../constants/AppConstants';

const PayloadSources = Constants.PayloadSources;

let AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function (action) {
  let payload = {
    source: PayloadSources.VIEW_ACTION,
    action: action
  };
  this.dispatch(payload);
};

AppDispatcher.handleServerAction = function (action) {
  let payload = {
    source: PayloadSources.SERVER_ACTION,
    action: action
  };
  this.dispatch(payload);
};

export default AppDispatcher;
