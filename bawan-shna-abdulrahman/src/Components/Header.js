import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Search from "./Search";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Link
          to="/"
          style={{
            marginRight: "20px",
            color: "white",
            textDecoration: "none",
          }}
        >
          React app
        </Link>
        <Navbar.Toggle aria-controls="basic-Navbar-nav" />
        <Navbar.Collapse id="basic-Navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
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
