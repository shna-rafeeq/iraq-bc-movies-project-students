import React, { useState, useEffect } from "react";
import { constructUrl } from "./Api";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function MoviePage(props) {
  let SEARCH_URL;
  let MOVIE_ID = props.movieId;
  const [movieItem, setMovieItem] = useState({});
  const history = "./MovieGrid";
  useEffect(() => {
    SEARCH_URL = constructUrl(`movie/${MOVIE_ID}`);
    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovieItem(data);
        console.log(data);
        console.log("happen");
      });
  }, [MOVIE_ID]);
  return (
    <>
      <h1 align="middle">{movieItem.original_title}</h1>
      <a style={{ margin: "100px" }} href="./MovieGrid.js">
        Back
      </a>
    </>
  );
}
