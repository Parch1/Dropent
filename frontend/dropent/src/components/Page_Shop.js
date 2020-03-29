import React, { Component } from 'react';
import CheckoutList from './CheckoutList';
import BackgroundLeaf from './BackgroundLeaf';
import PriceInfo from './PriceInfo';
import Header from './Header';
import Rectangle from 'react-rectangle';
import SearchStatus from './SearchStatus';
import searchStatus from './Search';

console.log(searchStatus);


class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched:false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searched: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
    .then(response => response.json())
    .then(state => this.setState(state));
  }

  render() {
    return (
      <div style={{backgroundColor: '#E2EBEB'}}>

        <div style={{marginLeft:'630px', marginBottom:'-430px', marginTop:'-100px'}} tabindex="0">
          <SearchStatus userStatus={this.state.searched}></SearchStatus>
          {this.state.searched && <PriceInfo></PriceInfo>}
          {!this.state.searched && <BackgroundLeaf></BackgroundLeaf>}
        </div>

        <div onClick={this.handleChange}>
          <Header style={{position: 'absolute', marginTop:'-100px'}}></Header>
        </div>

        <Rectangle aspectRatio={[100, 1]} style={{marginTop:'550px'}}>
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

  export default Shop;
