import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


class Alerts extends React.Component {
  state = {
    data: [
      {name: "Bread"},
      {name: "Toilet Paper"},
      {name: "Hand Sanitizer"},
    ] // Sample data
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    // this.getSavedItems()
    //   .then(res => {
    //     this.setState({ data: res });
    //   })
    //   .catch(err => console.log(err));
  }

  // Fetches our GET route from the Django Rest server.
  // getSavedItems = async () => {
  //   const response = await fetch('/items/');
  //   const body = await response.json();
  //
  //   if (response.status !== 200) {
  //     throw Error(body.message);
  //   }
  //   return body;
  // };


  render() {
    return (
      <Container>
        <Row className="py-4 justify-content-md-center">
          <Col md="4">
            <h2>My Saved Items</h2>
            <hr />
            <p>Enter phone number for mobile SMS alerts</p>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="(000) 000-0000"
                aria-label="Phone number"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button href="/saved" variant="outline-secondary">
                  Go
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col md="8">
            <Accordion>
              {this.state.data.map((item, i) => (
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey={i}>
                    <h6>
                      {item.name}
                    </h6>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={i}>
                    <Card.Body>
                      <p>Email Alerts: ON</p>
                      <p>Mobile Alerts: ON</p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Alerts;
