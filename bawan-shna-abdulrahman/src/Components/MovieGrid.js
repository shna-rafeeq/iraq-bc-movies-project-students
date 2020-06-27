import React from "react";
import RenderMovie from "./RenderMovie";
import { Row, Col } from "react-simple-flex-grid";

export default function MoviesGrid(props) {
  const movies = props.movies;
  return (
    <>
      <Row gutter={40}>
        {movies.length > 0 &&
          movies.map((movie) => (
            <Col span={3} align="middle">
              <RenderMovie
                overview={movie.overview}
                src={
                  "https://image.tmdb.org/t/p/original" + movie.backdrop_path
                }
                key={movie.id}
                title={movie.title}
              />
            </Col>
          ))}
      </Row>
      {/* <RenderMovie movies={props.movies} /> */}
    </>
  );
}
