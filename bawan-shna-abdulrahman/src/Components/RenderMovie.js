import React, { useState } from "react";
import { Card, Badge, Modal, Button } from "react-bootstrap";
import "./BoxShadow.css";
import { Link } from "react-router-dom";

export default function RenderMovie(props) {
  const nullPhoto =
    "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png";
  const [show, setShow] = useState(false);
  const toogle = () => {
    // alert("called");
    setShow((prevstate) => {
      return !prevstate;
    });
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <Link
        to={`/movie/${props.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Card
          className="shadow-box"
          style={{
            width: "300px",
            margin: "20px",
            transition: "width 2s",
          }}
        >
          <Card.Img
            variant="top"
            src={props.moviebackdrop !== null ? props.src : nullPhoto}
          />
          <Card.Body>
            <Card.Title title={props.title} align="middle">
              {`${props.title}`.substr(0, 20)}
              {props.title.length >= 25 ? "..." : ""}
            </Card.Title>
            <Badge variant="warning" style={{ marginRight: "65px" }}>
              Popularity:{props.popularity}
            </Badge>
            <Badge variant="primary">{props.release_date}</Badge>
          </Card.Body>
        </Card>
      </Link>
      <Button variant="warning" onClick={toogle} style={{ marginLeft: "35%" }}>
        Overview
      </Button>

      <Modal show={show} onHide={toogle}>
        <Modal.Header closeButton>
          <Modal.Title>OverView</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.overview}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={toogle}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
