import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Search from "./Search";

export default function Header(props) {
  const { handleQuery, handleMovies, isLoading, setIsLoading } = props;
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          React App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-Navbar-nav" />
        <Navbar.Collapse id="basic-Navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" style={{ color: "white" }}>
              Home
            </Nav.Link>
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
