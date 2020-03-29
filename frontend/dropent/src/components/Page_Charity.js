import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Charity extends React.Component {
  state = {
    shelters: [
      {
        name: "Covenant House New York",
        address: "550 10th Ave, New York, NY 10018, United States"
      },
      {
        name: "Rescue Mission",
        address: "90 Lafayette St, New York, NY 10013, United States"
      },
      {
        name: "West Side YMCA",
        address: "5 W 63rd St., New York, NY 10023, United States"
      },
      {
        name: "Seattle's Union Gospel Mission: Hope Place, Women and Children's Shelter",
        address: "3802 S Othello St, Seattle, WA 98118, United States"
      },
      {
        name: "Daily Bread Food Bank",
        address: "https://www.dailybread.ca/, Toronto"
      }
    ] // Sample data
  };

  render() {
    return (
      <Container>
        <Row className="mt-4">
          <Col className="ml-auto">
            <h2>Donate supplies to a local shelter</h2>
          </Col>
          <Col xs="2" className="mr-auto">
            <Button href="/CourseBrowse" variant="light">
              Search near me
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr />
            <CardDeck>
              {this.state.shelters.map(shelter => (
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="../images/shelters/Union_gospel.jpeg" />
                  <Card.Body>
                    <Card.Title>{shelter.name}</Card.Title>
                    <Card.Text>
                      {shelter.address}
                    </Card.Text>
                    <Button variant="primary">Donate</Button>
                  </Card.Body>
                </Card>
              ))}
            </CardDeck>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Charity;
