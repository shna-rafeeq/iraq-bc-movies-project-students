import React from "react";
// import RenderMovie from "./RenderMovie";
import MovieGrid from "./MovieGrid";

export default function Main(props) {
  // const query = props.query;
  const movies = props.movies;

  return (
    <>
      {movies.length > 0 && (
        <MovieGrid
          movies={movies}
          setMovieId={props.setMovieId}
          movieId={props.movieId}
        />
      )}
    </>
  );
}
