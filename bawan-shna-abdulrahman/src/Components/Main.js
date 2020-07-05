import React, { useContext } from "react";
import MovieGrid from "./MovieGrid";
import { StateContext } from "./StateProvider";

export default function Main() {
  const [state] = useContext(StateContext);
  // const movies = props.movies;
  return <>{state.movies.length > 0 && <MovieGrid />}</>;
}
