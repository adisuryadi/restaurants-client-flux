'use strict';

import keyMirror from 'react/lib/keyMirror';

export default {
  ActionTypes: keyMirror({
    RECEIVE_BUNDLE: null,
    RECEIVE_BUNDLE_FAILED: null,

    QUERY_FILTER_CHANGE: null
  }),

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
