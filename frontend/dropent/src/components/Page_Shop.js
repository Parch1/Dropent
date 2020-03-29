import React, { Component } from 'react';
import CheckoutList from './CheckoutList';
import BackgroundLeaf from './BackgroundLeaf';
import PriceInfo from './PriceInfo';
import ShopHeader from './ShopHeader';
import Rectangle from 'react-rectangle';

// For Layout
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SearchStatus from './SearchStatus';
import searchStatus from './Search';

console.log(searchStatus);

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched:false,
      query:null
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
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <div onClick={this.handleChange}>
              <ShopHeader></ShopHeader>
            </div>
            <div tabindex="0">
              <SearchStatus userStatus={this.state.searched} query={this.state.query}></SearchStatus>
              {!this.state.searched && <p onLoad={this.handleSearch}></p>}
              {!this.state.searched && <PriceInfo></PriceInfo>}
              {this.state.searched && <BackgroundLeaf></BackgroundLeaf>}
            </div>

          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col>
            <Rectangle aspectRatio={[100, 1]}>
              <div style={{ background: '#DBDFE1', width: '100%', height: '100%', align:'left' }} />
            </Rectangle>

            <CheckoutList></CheckoutList>
          </Col>
        </Row>

      </Container>
    );
  }
}

  export default Shop;
