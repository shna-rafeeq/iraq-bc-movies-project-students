import React, { useState, useEffect, useContext } from "react";
import { Button, Form, FormControl, Spinner } from "react-bootstrap";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import DropdownCategories from "./DropdownCategories";
import { constructUrl } from "./Api";
import { StateContext } from "./StateProvider";

export default function Search() {
  const [state, dispatch] = useContext(StateContext);

  const [queryInput, setQueryInput] = useState("");
  const [category, setCategory] = useState({});
  const history = useHistory();
  const location = useLocation();
  const parts = location.search.split("&");
  const parts2 = `${parts[0]}`.split("=");
  const match = useRouteMatch({
    path: `/`,
    strict: true,
    sensitive: true,
  });
  const changeCategory = (category) => {
    dispatch({ type: "SET_ISLOADING", payload: true });
    setCategory(category);
    // if (category.id == 0) {
    //   setQueryInput("");
    // }
  };

  const onChange = (e) => {
    setQueryInput(e.target.value);
    history.push({
      pathname: location.pathname,
      search: "?query=" + e.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "SET_ISLOADING", payload: true });
    dispatch({ type: "SET_QUERY", payload: queryInput });

    fetchMovies(queryInput);
    if (!match.isExact) {
      history.push({
        pathname: "/",
        search: "?query=" + queryInput,
      });
    }
  };

  useEffect(() => fetchMovies(queryInput), [category]);
  useEffect(() => {
    if (location.search != "") {
      fetchMovies(parts2[1]);
      setQueryInput(parts2[1]);
    } else {
      fetchMovies();
    }
  }, []);

  function fetchMovies(queryInput = "") {
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
          dispatch({ type: "SET_MOVIES", payload: movies });
          dispatch({ type: "SET_ISLOADING", payload: false });
        }
      })

      .catch((err) => console.log(err));
  }

  return (
    <Form inline onSubmit={onSubmit} style={{ flexFlow: "row" }}>
      <DropdownCategories category={category} setCategory={changeCategory} />
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={onChange}
      />
      <Button variant="outline-warning" type="submit">
        Search
        <span>
          {state.isLoading ? (
            <Spinner animation="border" variant="warning" size="sm" />
          ) : (
            " "
          )}
        </span>
      </Button>
    </Form>
  );
}
