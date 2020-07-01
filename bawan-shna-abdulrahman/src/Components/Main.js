import React from "react";
import MovieGrid from "./MovieGrid";

export default function Main(props) {
  const movies = props.movies;
  return (
    <>
      {movies.length > 0 && (
        <MovieGrid movies={movies} setMovieId={props.setMovieId} />
      )}
    </>
  );
}
