import React from 'react';

class ListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ui divided list">
        <div className="item">
          <i className="huge map marker icon"></i>
          <div className="content">
            <div className="header">Bali Nusa Indonesian Restaurant</div>
            <div className="description"><span>Ninth Avenue,&nbsp;<a href="#">Manhattan,&nbsp;</a><a href="#">10036</a></span></div>
            <div className="extra"><a href="#"><em>Indonesian</em></a></div>
          </div>
        </div>
        <div className="item">
          <i className="huge map marker icon"></i>
          <div className="content">
            <div className="header">Kopi Kopi</div>
            <div className="description"><span>West 3 Street,&nbsp;<a href="#">Manhattan,&nbsp;</a><a href="#">10012</a></span></div>
            <div className="extra"><a href="#"><em>Indonesian</em></a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItems;
