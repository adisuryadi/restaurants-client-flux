import { Dispatcher } from 'flux';
import Constants from '../constants/AppConstants';

const PayloadSources = Constants.PayloadSources;

const AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function handleViewAction(action) {
  const payload = {
    source: PayloadSources.VIEW_ACTION,
    action: action,
  };
  this.dispatch(payload);
};

AppDispatcher.handleServerAction = function handleServerAction(action) {
  const payload = {
    source: PayloadSources.SERVER_ACTION,
    action: action,
  };
  this.dispatch(payload);
};

export default AppDispatcher;
