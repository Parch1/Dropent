import React, { Component } from 'react';
import CheckoutList from './components/CheckoutList';
import BackgroundLeaf from './components/BackgroundLeaf';
import Header from './components/Header';
import Rectangle from 'react-rectangle';

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
      <div       style={{
        backgroundColor: '#E2EBEB',
      }}>
        <Header></Header>
        <div>
        <BackgroundLeaf></BackgroundLeaf>
          </div>
        <Rectangle aspectRatio={[100, 1]}>
      <div style={{ background: '#DBDFE1', width: '100%', height: '100%', align:'left' }} />
    </Rectangle>
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
