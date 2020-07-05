import React, { useContext } from "react";
import RenderMovie from "./RenderMovie";
import { Container, Row } from "react-bootstrap";
import { StateContext } from "./StateProvider";

export default function MoviesGrid() {
  const [state, dispatch] = useContext(StateContext);
  // const movies = props.movies;
  return (
    <Container>
      <Row className="justify-content-center">
        {state.movies.length > 0 &&
          state.movies.map((movie) => (
            <RenderMovie
              overview={movie.overview}
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              moviebackdrop={movie.backdrop_path}
              id={movie.id}
              key={movie.id}
              title={movie.title}
              popularity={movie.popularity}
              release_date={movie.release_date}
            />
          ))}
      </Row>
    </Container>
  );
}
