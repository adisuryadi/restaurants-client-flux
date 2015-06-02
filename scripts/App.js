'use strict';

import React from 'react';

import Toolbar from './components/Toolbar.react.js';
import ListItems from './components/ListItems.react.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ui center aligned page grid">
        <div className="twelve wide left aligned column">
          <div className="main container">
            <Toolbar />
            <ListItems />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
