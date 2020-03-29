import React, { Component } from 'react';
import CheckoutList from './components/CheckoutList';
import BackgroundLeaf from './components/BackgroundLeaf';
import PriceInfo from './components/PriceInfo';
import Header from './components/Header';
import Rectangle from 'react-rectangle';
import searchStatus from './Search.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched:false
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
      <div style={{
        backgroundColor: '#E2EBEB'}}>
        <div style={{marginLeft:'630px', marginBottom:'-430px', marginTop:'-100px'}} tabindex="0">
      {searchStatus&& <PriceInfo></PriceInfo>}
      {!searchStatus && <BackgroundLeaf></BackgroundLeaf>}

          </div>
          <Header style={{position: 'absolute', marginTop:'-100px'}}></Header>
        <Rectangle aspectRatio={[100, 1]} style={{marginTop:'550px'}}>
      <div style={{ background: '#DBDFE1', width: '100%', height: '100%', align:'left' }} />
    </Rectangle>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
        <CheckoutList>

        </CheckoutList>
        </div>
      </div>


    );
  }
}

export default App;
