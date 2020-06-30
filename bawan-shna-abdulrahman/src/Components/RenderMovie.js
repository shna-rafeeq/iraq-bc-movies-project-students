import React from "react";
import { Modal, Card, Badge } from "react-bootstrap";
import "./BoxShadow.css";
import { Link } from "react-router-dom";

export default function RenderMovie(props) {
  return (
    <Link
      to={`/movie/${props.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div style={{ marginTop: "50px" }}>
        <Card
          className="shadow-box"
          style={{
            width: "300px",
            margin: "10px",
          }}
        >
          <Card.Img variant="top" src={props.src} />
          <Card.Body>
            <Card.Title title={props.title} align="middle">
              {`${props.title}`.substr(0, 25)}
              {props.title.length >= 25 ? "..." : ""}
            </Card.Title>
            <Badge variant="warning" style={{ marginRight: "65px" }}>
              Popularity:{props.popularity}
            </Badge>
            <Badge variant="primary">{props.release_date}</Badge>
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
}
