import React, { Component } from 'react';

class BackgroundLeaf extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }


  render() {
    return (
      <div className="Leaf" style={{align:'right'}}>
        <header className="item-list">
            <img src={ require('../images/leaf.png') }></img>

        </header>
      </div>
    );
  }
}

export default BackgroundLeaf;
