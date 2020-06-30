import React, { useState, useEffect } from "react";
import { constructUrl } from "./Api";
import { Link } from "react-router-dom";

export default function MoviePage(props) {
  let SEARCH_URL;
  let MOVIE_ID = props.match.params.id;
  const [movieItem, setMovieItem] = useState({});

  useEffect(() => {
    SEARCH_URL = constructUrl(`movie/${MOVIE_ID}`);
    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.id == undefined) {
          props.history.push("/");
        } else {
          setMovieItem(data);
          console.log(props);
        }
      })
      .catch((e) => {
        props.history.push("/");
      });
  }, [MOVIE_ID]);
  return (
    <>
      <h1 align="middle">{movieItem.original_title}</h1>
      <Link to="/" style={{ marginLeft: "40%" }}>
        Homes
      </Link>
    </>
  );
}
