import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "User",
    };
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    return (
        <Navbar collapseOnSelect bg="light" variant="light" expand="sm">
          <Navbar.Brand href="/Home">
            <img
              src={require("../images/logo.png")}
              width="60"
              height="60"
              className="d-inline-block align-middle"
            />
            {" DROPENT"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto mx-2">
              <Nav.Item className="mx-2">
                <Nav.Link href="/">My Items</Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-2">
                <Nav.Link href="/">Shop</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <NavDropdown
                className="justify-content-end"
                title={this.state.name}
                id="basic-nav-dropdown"
                alignRight
              >
                <NavDropdown.Item href="/Account">Account</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Login">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
  }
}

export default withRouter(Navigation);
