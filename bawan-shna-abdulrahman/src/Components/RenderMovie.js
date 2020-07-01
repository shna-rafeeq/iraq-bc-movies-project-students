import React from "react";
import { Card, Badge } from "react-bootstrap";
import "./BoxShadow.css";
import { Link } from "react-router-dom";

export default function RenderMovie(props) {
  const nullPhoto =
    "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";
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
            margin: "20px",
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
      </div>
    </Link>
  );
}
