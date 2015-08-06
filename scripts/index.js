'use strict';

import 'babel-core/polyfill';

import React from 'react';
import router from './router';

window.React = React; // For React Developer Tools

if (process.env.NODE_ENV !== 'test') {
  router.run((Handler, state) => {
    React.render(<Handler {...state.params} />, document.getElementById('app'));
  });
}
