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
      <div className="Leaf" style={{}} >
            <img src={ require('../images/leaf.png') } style={{}}></img>
            <img src={ require('../images/drop.png') } style={{align:'center'}}></img>
      </div>
    );
  }
}

export default BackgroundLeaf;
