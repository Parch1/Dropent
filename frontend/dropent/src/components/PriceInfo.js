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
      <div className="Leaf">
            <img src={ require('../images/leaf.gif') } style={{marginTop:'40px'}}></img>
      </div>
    );
  }
}

export default PriceInfo;
