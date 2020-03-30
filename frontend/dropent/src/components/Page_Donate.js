import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


class Donate extends React.Component {
  state = {
    shelters: [
      {
        name: "Covenant House New York",
        address: "550 10th Ave, New York, NY 10018, United States",
        imgpath: require("../images/shelters/Convenant.png"),
      },
      {
        name: "Rescue Mission",
        address: "90 Lafayette St, New York, NY 10013, United States",
        imgpath: require("../images/shelters/Mission.jpg")
      },
      {
        name: "West Side YMCA",
        address: "5 W 63rd St., New York, NY 10023, United States",
        imgpath: require("../images/shelters/ymca_ny.png")
      },
      // {
      //   name: "Seattle's Union Gospel Mission: Hope Place, Women and Children's Shelter",
      //   address: "3802 S Othello St, Seattle, WA 98118, United States"
      // },
      // {
      //   name: "Daily Bread Food Bank",
      //   address: "https://www.dailybread.ca/, Toronto"
      // }
    ] // Sample data
  };

  render() {
    return (
      <Container>
        <Row className="pt-4">
          <Col sm="3" className="ml-auto">
            <h2>Donate</h2>
            <hr />
            <h5>Buy supplies for a local shelter in need!</h5>
            <hr />
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Zip code"
                aria-label="Zip code"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button href="/donate" variant="outline-secondary">
                  Search near me
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col sm="9">
            {this.state.shelters.map(shelter => (
              <div>
                <Card>
                  <Card.Img variant="top" src={shelter.imgpath} />
                  <Card.Body>
                    <Card.Title>{shelter.name}</Card.Title>
                    <Card.Text>
                      {shelter.address}
                    </Card.Text>
                    <Button variant="success">Donate</Button>
                  </Card.Body>
                </Card>
                <hr />
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}
// style={{ width: '18rem' }}
export default Donate;
