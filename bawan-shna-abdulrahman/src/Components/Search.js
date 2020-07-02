import React, { useState, useEffect } from "react";
import { Button, Form, FormControl, Spinner } from "react-bootstrap";
import DropdownCategories from "./DropdownCategories";
import { constructUrl } from "./Api";

export default function Search(props) {
  const { setIsLoading, handleQuery } = props;
  const [category, setCategory] = useState({});

  const changeCategory = (category) => {
    setIsLoading(true);
    setCategory(category);
  };
  const [queryInput, setQueryInput] = useState("");

  const onChange = (e) => {
    setQueryInput(e.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    handleQuery(queryInput);
    fetchMovies();
  };

  useEffect(fetchMovies, [category]);

  function fetchMovies() {
    let SEARCH_URL;
    if (queryInput !== "") {
      SEARCH_URL = constructUrl("search/movie", queryInput);
    } else {
      SEARCH_URL = constructUrl("movie/popular");
    }
    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (Boolean(data.results)) {
          let movies = data.results;

          if (category.id) {
            movies = movies.filter((movie) =>
              movie.genre_ids.includes(category.id)
            );
            console.log(movies);
          }
          props.handleMovies(movies);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <Form inline onSubmit={onSubmit}>
      <DropdownCategories category={category} setCategory={changeCategory} />
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={onChange}
      />
      <Button variant="outline-light" type="submit">
        Search
        <span>
          {props.isLoading ? (
            <Spinner animation="border" variant="warning" size="sm" />
          ) : (
            " "
          )}
        </span>
      </Button>
    </Form>
  );
}
