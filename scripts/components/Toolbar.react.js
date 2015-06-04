'use strict';

import React from 'react';

import DropDown from './DropDown.react.js'

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ui menu">
        <DropDown items={this.props.cuisines} title="Cuisine" />
        <DropDown items={this.props.boroughs} title="Area" />
        <div className="right item">
          <div className="ui transparent icon input">
            <input type="text" placeholder="Search..." />
            <i className="search icon"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;
