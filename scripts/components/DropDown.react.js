'use strict';

import _ from 'lodash';
import React from 'react';
import { PropTypes } from 'react';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_item: props.selected_item ? props.selected_item : null
    };
  }

  componentDidMount() {
    $(React.findDOMNode(this)).dropdown();
  }

  render() {
    var selectedItem;
    if (this.state.selected_item) {
      selectedItem = <span className="text">{this.state.selected_item._id}</span>;
    } else {
      selectedItem = <span className="text">Any {this.props.title}</span>;
    }

    return (
        <div className="ui pointing dropdown link item">
          {selectedItem}<i className="dropdown icon"></i>
          <div className="menu">
            <div className="header">{this.props.title}</div>
            {_.keys(this.props.items).map((key) => {
              return (
                  <div className="item" key={this.props.items[key]._id}>{this.props.items[key]._id}</div>
              );
            })}
          </div>
        </div>
    );
  }
}

DropDown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired,
  selected_item: PropTypes.object
};

export default DropDown;
