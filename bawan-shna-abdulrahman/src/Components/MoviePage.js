import React, { useState, useEffect } from "react";
import { constructUrl } from "./Api";
import { Link } from "react-router-dom";
import { Card, Badge } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function MoviePage(props) {
  const nullPhoto =
    "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";

  let SEARCH_URL;
  let MOVIE_ID = props.match.params.id;
  const [movieItem, setMovieItem] = useState({});
  const [trailers, setTrailers] = useState([]);
  const [actors, setActors] = useState([]);

  // fetch each card
  useEffect(() => {
    SEARCH_URL = constructUrl(`movie/${MOVIE_ID}`);
    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.id == undefined) {
          props.history.push("/");
        } else {
          setMovieItem(data);
        }
      })
      .catch((e) => {
        props.history.push("/");
      });
  }, [MOVIE_ID]);
  //fetch trailers
  useEffect(() => {
    SEARCH_URL = constructUrl(`movie/${MOVIE_ID}/videos`);
    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        const tmp = [];
        data.results.map((trailer) => {
          tmp.push(`https://www.youtube.com/watch?v=${trailer.key}`);
        });
        setTrailers(tmp);
      });
  }, [MOVIE_ID]);

  //fetch actors
  useEffect(() => {
    SEARCH_URL = constructUrl(`movie/${MOVIE_ID}/credits`);
    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        let actors = [];
        data.cast.map((actor) => {
          actors.push(actor.name);
        });
        setActors(actors);
      });
  }, [MOVIE_ID]);

  return (
    <>
      <div
        style={{
          marginTop: "50px",
        }}
      >
        <Card
          className="shadow-box"
          style={{
            width: "300px",
            margin: "20px",
          }}
        >
          <Card.Img
            variant="top"
            src={
              movieItem.backdrop_path !== null
                ? "https://image.tmdb.org/t/p/original" +
                  movieItem.backdrop_path
                : nullPhoto
            }
          />
          <Card.Body>
            <Card.Title align="middle">{movieItem.original_title}</Card.Title>
            <Badge variant="warning" style={{ marginRight: "95px" }}>
              Rating: {movieItem.vote_average}
            </Badge>
            <Badge variant="primary">{movieItem.release_date}</Badge>
          </Card.Body>
        </Card>
      </div>
      {trailers.map((v, i) => {
        return (
          <ReactPlayer
            style={{ marginTop: "10px", marginLeft: "10px" }}
            key={`haha-${i}`}
            url={v}
          />
        );
      })}
      {actors.map((v) => {
        return <p style={{ marginLeft: "10px" }}>{v}</p>;
      })}

      {movieItem.genres
        ? movieItem.genres.map((genre) => {
            return (
              <Badge
                style={{ marginRight: "20px", marginLeft: "10px" }}
                variant="warning"
              >
                {genre.name}
              </Badge>
            );
          })
        : null}

      <Link
        to="/"
        style={{
          marginLeft: "50%",
          textDecoration: "none",
          color: "black",
          padding: "5px",
          backgroundColor: " #ffc107",
          borderRadius: "0.25rem",
          borderColor: "#ffc107",
        }}
      >
        Back
      </Link>
    </>
  );
}
