import React, { Component } from "react";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";

class Header extends Component {
  constructor() {
    super();
    this.state = { value: "" };
    this.baseState = this.state;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + this.state.value);
    event.preventDefault();
    this.setState(this.baseState);
  }
  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            My First React App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-Navbar-nav" />
          <Navbar.Collapse id="basic-Navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" style={{ color: "white" }}>
                Home
              </Nav.Link>
            </Nav>
            <Form inline onSubmit={this.handleSubmit}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={this.state.value}
                onChange={this.handleChange}
              />

              <Button variant="outline-light" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
