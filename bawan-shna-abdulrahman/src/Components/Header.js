import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Search from "./Search";
import { Link, useHistory } from "react-router-dom";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StateContext } from "./StateProvider";
import { constructUrl } from "./Api";
export default function Header() {
  const [state, dispatch] = useContext(StateContext);
  const history = useHistory();

  const home = () => {
    let SEARCH_URL;
    SEARCH_URL = constructUrl("movie/popular");
    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_MOVIES", payload: data.results }));
    history.push("/");
  };

  return (
    <div>
      <Navbar bg="dark" expand="lg" style={{ zIndex: 1000 }}>
        {/* <Link
          to="/"
          style={{
            marginRight: "20px",
            color: "white",
            textDecoration: "none",
          }}
        > */}
        <FontAwesomeIcon
          icon={faFilm}
          style={{ fontSize: "25px", color: "#FFC107" }}
        />
        {/* </Link> */}
        <Navbar.Toggle aria-controls="basic-Navbar-nav" />
        <Navbar.Collapse id="basic-Navbar-nav">
          <Nav className="mr-auto">
            {/* <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link> */}
            <Button variant="dark" onClick={home}>
              Home
            </Button>
          </Nav>
          <Search />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
