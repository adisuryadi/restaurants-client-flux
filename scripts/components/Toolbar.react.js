import React, { PropTypes } from 'react';
import DropDown from './DropDown.react.js';

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui menu">
        <DropDown
            items={this.props.cuisines}
            selected_item={this.props.current_cuisine}
            name="cuisine" />
        <DropDown
            items={this.props.boroughs}
            selected_item={this.props.current_borough}
            name="borough" />
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

Toolbar.propTypes = {
  cuisines: PropTypes.object.isRequired,
  current_cuisine: PropTypes.object.isRequired,
  boroughs: PropTypes.object.isRequired,
  current_borough: PropTypes.object.isRequired,
};

export default Toolbar;
