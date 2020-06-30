import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Search from "./Search";

export default function Header(props) {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="./MovieGrid.js" style={{ color: "white" }}>
          React App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-Navbar-nav" />
        <Navbar.Collapse id="basic-Navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="./MovieGrid.js" style={{ color: "white" }}>
              Home
            </Nav.Link>
          </Nav>
          <Search
            handleQuery={props.handleQuery}
            handleMovies={props.handleMovies}
            isLoading={props.isLoading}
            setIsLoading={props.setIsLoading}
          />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
