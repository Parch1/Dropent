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
      <div className="Leaf" style={{}}>
            <img src={ require('../images/nodrop.png') } style={{marginTop:'40px'}}></img>
      </div>
    );
  }
}

export default BackgroundLeaf;
