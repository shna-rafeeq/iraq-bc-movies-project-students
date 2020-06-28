import React from "react";
import RenderMovie from "./RenderMovie";
import { Row } from "react-simple-flex-grid";
import { Container } from "react-bootstrap";

export default function MoviesGrid(props) {
  const movies = props.movies;
  return (
    <Container>
      <Row className="justify-content-center">
        {movies.length > 0 &&
          movies.map((movie) => (
            <RenderMovie
              overview={movie.overview}
              src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
              key={movie.id}
              title={movie.title}
            />
          ))}
      </Row>
    </Container>
  );
}
