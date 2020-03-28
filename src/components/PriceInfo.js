import React, { Component } from 'react';

class PriceInfo extends Component {
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
      <div className="Items">
        <header className="item-list">
            <img src="https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"></img>

        </header>
      </div>
    );
  }
}

export default PriceInfo;
