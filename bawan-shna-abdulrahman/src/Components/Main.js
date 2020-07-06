import React, { useContext } from "react";
import MovieGrid from "./MovieGrid";
// import { StateContext } from "./StateProvider";
import { useSelector } from "react-redux";
export default function Main() {
  // const [state] = useContext(StateContext);
  const movies = useSelector((state) => state.movies);
  return <>{movies.length > 0 && <MovieGrid />}</>;
}
