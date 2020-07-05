import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Search from "./Search";
import { Link } from "react-router-dom";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" style={{ zIndex: 1000 }}>
        <Link
          to="/"
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
        </Link>
        <Navbar.Toggle aria-controls="basic-Navbar-nav" />
        <Navbar.Collapse id="basic-Navbar-nav">
          <Nav className="mr-auto">
            {/* <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Home
            </Link> */}
          </Nav>
          <Search />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
