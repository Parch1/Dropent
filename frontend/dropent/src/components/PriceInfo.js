import React, { Component } from 'react';

import PriceChart from './PriceChart';

import Row from 'react-bootstrap/Row';

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
      <Row className="justify-content-md-center">
        <div className="Leaf">
            <img src={ require('../images/drop.gif') } style={{marginTop:'40px'}}></img>
        </div>
        <PriceChart/>
      </Row>
    );
  }
}

export default PriceInfo;
