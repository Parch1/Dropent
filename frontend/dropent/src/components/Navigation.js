import React from "react";
import { withRouter } from "react-router-dom";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      userId: "",
    };
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="sm">
          <Navbar.Brand href="/Home">
            <img
              src={require("./logo.png")}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {" Course Star"}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto mx-2">
              <Nav.Item className="mx-2">
                <Nav.Link href="/MyCourses">My Courses</Nav.Link>
              </Nav.Item>
              <Nav.Item className="mx-2">
                <Nav.Link href="/Search">Search</Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Navbar.Text className="text-center mx-4 mt-1">
                {this.state.userId}
              </Navbar.Text>
              <NavDropdown
                className="justify-content-end"
                title={this.state.name}
                id="basic-nav-dropdown"
                alignRight
              >
                <NavDropdown.Item href="/Account">Account</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Login" onClick={this.logout}>
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
