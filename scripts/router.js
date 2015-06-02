'use strict';

import routes from './routes';
import { create as createRouter, HistoryLocation, HashLocation } from 'react-router';

let router = createRouter({
  location: process.env.NODE_ENV === 'production' ? HashLocation : HistoryLocation,
  routes: routes
});

export default router;
