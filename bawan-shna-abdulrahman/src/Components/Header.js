import React, { useContext } from "react";

import { Navbar, Nav } from "react-bootstrap";
import Search from "./Search";
import { Link } from "react-router-dom";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" style={{ zIndex: 1000 }}>
        <Nav.Link
          href="/"
          style={{
            marginRight: "20px",
            color: "white",
            textDecoration: "none",
          }}
        >
          <FontAwesomeIcon
            icon={faFilm}
            style={{ fontSize: "25px", color: "#FFC107" }}
          />
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-Navbar-nav" />
        <Navbar.Collapse id="basic-Navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" style={{ color: "white" }}>
              Home
            </Nav.Link>
          </Nav>
          <Search />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
