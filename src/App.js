import React, { Component } from 'react';
import CheckoutList from './components/CheckoutList';
import BackgroundLeaf from './components/BackgroundLeaf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  render() {
    return (
      <div>
        <BackgroundLeaf></BackgroundLeaf>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <CheckoutList></CheckoutList>
        </div>
      </div>

    );
  }
}

export default App;
