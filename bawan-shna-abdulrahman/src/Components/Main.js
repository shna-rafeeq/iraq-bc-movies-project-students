import React, { useState, useEffect } from "react";
import RenderMovie from "./RenderMovie";
import { constructUrl } from "./Api";
import { Row, Col } from "react-simple-flex-grid";

function Main(props) {
  const [movies, setMovies] = useState([]);
  const query = props.query;
  const categorie = props.categorie;

  useEffect(() => {
    let SEARCH_URL;
    if (query !== "") {
      SEARCH_URL = constructUrl("search/movie", query);
    } else {
      SEARCH_URL = constructUrl("movie/popular");
    }
    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.results !== undefined) {
          let movies = data.results;
          console.log(movies);
          console.log(categorie);

          if (categorie.id) {
            movies = movies.filter((movie) =>
              movie.genre_ids.includes(categorie.id)
            );
            console.log(movies);
          }
          props.setIsSpinnerHidden(true);
          setMovies(movies);
        }
      })
      .catch((err) => console.log(err));
  }, [query, categorie]);

  return (
    <>
      <Row gutter={40}>
        {movies.length > 0 &&
          movies.map((movie) => (
            <Col span={4} align="middle">
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
    </>
  );
}

export default Main;
