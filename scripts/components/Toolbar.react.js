var React = require('react');

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ui menu">
        <div className="ui pointing dropdown link item">
          <span className="text">Any Cuisine</span><i className="dropdown icon"></i>
          <div className="menu">
            <div className="header">Cuisine</div>
            <div className="item">Any Cuisine</div>
            <div className="item">Indonesian</div>
            <div className="item">Vietnamese</div>
          </div>
        </div>
        <div className="ui pointing dropdown link item">
          <span className="text">Any Area</span><i className="dropdown icon"></i>
          <div className="menu">
            <div className="header">Area</div>
            <div className="item">Any Area</div>
            <div className="item">Manhattan</div>
            <div className="item">Queens</div>
          </div>
        </div>
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
