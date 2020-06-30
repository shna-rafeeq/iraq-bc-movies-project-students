import React, { useState, useEffect } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import Spinners from "./Spinner";
import DropdownCategories from "./DropdownCategories";
import { constructUrl } from "./Api";

export default function Search(props) {
  const [category, setCategory] = useState({});

  const changeCategory = (category) => {
    console.log(category);
    props.setIsLoading(true);
    setCategory(category);
  };
  const [query, setQuery] = useState("");
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.setIsLoading(true);
    props.handleQuery(query);
  };

  useEffect(fetchMovies, [props.isLoading, category]);
  function fetchMovies() {
    if (!props.isLoading) return;
    let SEARCH_URL;
    if (query !== "") {
      SEARCH_URL = constructUrl("search/movie", query);
    } else {
      SEARCH_URL = constructUrl("movie/popular");
    }
    fetch(SEARCH_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.results !== undefined) {
          let movies = data.results;

          if (category.id) {
            movies = movies.filter((movie) => {
              movie.genre_ids.includes(category.id);
            });
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
          <Spinners isLoading={props.isLoading} />
        </span>
      </Button>
    </Form>
  );
}
