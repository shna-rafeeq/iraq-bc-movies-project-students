import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Search from "./Search";
import { Link } from "react-router-dom";

export default function Header(props) {
  const { handleQuery, handleMovies, isLoading, setIsLoading } = props;
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
            handleQuery={handleQuery}
            handleMovies={handleMovies}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
