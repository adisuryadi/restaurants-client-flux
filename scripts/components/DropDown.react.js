'use strict';

import _ from 'lodash';
import React, { PropTypes } from 'react';

import ActionCreators from '../actions/ActionCreators.js'

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_item: props.selected_item ? props.selected_item : null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    $(React.findDOMNode(this)).dropdown();
  }

  render() {
    var selectedItem;
    if (this.state.selected_item) {
      selectedItem = <span className="text">{this.state.selected_item._id}</span>;
    } else {
      selectedItem = <span className="text">Any {this.props.name}</span>;
    }

    return (
        <div className="ui pointing dropdown link item">
          {selectedItem}<i className="dropdown icon"></i>
          <div className="menu">
            <div className="header">{this.props.name}</div>
            {_.keys(this.props.items).map((key) => {
              let id = this.props.items[key]._id;
              return (
                  <a onClick={_.partial(this.handleClick, id)} className="item" key={id}>{id}</a>
              );
            })}
          </div>
        </div>
    );
  }

  handleClick(id) {
    ActionCreators.changeQueryFilter(this.props.name, id);
  }
}

DropDown.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired,
  selected_item: PropTypes.object
};

export default DropDown;
