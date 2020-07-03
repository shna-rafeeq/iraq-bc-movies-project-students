import React, { useState, useEffect } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import Spinners from "./Spinner";
import DropdownCategories from "./DropdownCategories";
import { constructUrl } from "./Api";

export default function Search(props) {
  const { setIsLoading, handleQuery } = props;
  const [category, setCategory] = useState({});
  const history = useHistory();
  const location = useLocation();
  const parts = location.search.split("&");
  const parts2 = `${parts[0]}`.split("=");

  const match = useRouteMatch({
    path: "/",
    strict: true,
    sensitive: true,
  });
  const changeCategory = (category) => {
    setIsLoading(true);
    setCategory(category);
  };
  const [queryInput, setQueryInput] = useState("");

  const onChange = (e) => {
    setQueryInput(e.target.value);
    history.push({
      pathname: location.pathname,
      search: "?query=" + e.target.value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    handleQuery(queryInput);
    fetchMovies(queryInput);
    if (!match.isExact) {
      history.push("/");
    }
  };

  useEffect(() => fetchMovies, [category]);
  useEffect(() => {
    if (location.search != "") {
      fetchMovies(parts2[1]);
      setQueryInput(parts2[1]);
    }
  }, []);

  function fetchMovies(queryInput) {
    // if (!props.isLoading) return;
    let SEARCH_URL;
    if (queryInput !== "") {
      SEARCH_URL = constructUrl("search/movie", queryInput);
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
              return movie.genre_ids.includes(category.id);
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
