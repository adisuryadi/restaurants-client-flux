'use strict';

import keyMirror from 'react/lib/keyMirror';

export default {
  ActionTypes: keyMirror({
    LOAD_BUNDLE: null,
    LOAD_BUNDLE_SUCCESS: null,
    LOAD_BUNDLE_FAILED: null,

    LOAD_RESTAURANTS: null,
    LOAD_RESTAURANTS_SUCCESS: null,
    LOAD_RESTAURANTS_FAILED: null,

    QUERY_FILTER_CHANGE: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
