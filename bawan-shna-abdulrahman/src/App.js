import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import MoviePage from "./Components/MoviePage";
import Info from "./Components/info";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

export default function App(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState("");

  const handleQuery = (query) => {
    setQuery(query);
  };

  const handleMovies = (movies) => {
    setMovies(movies);
    setIsLoading(false);
  };

  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">
          <Header
            handleQuery={handleQuery}
            handleMovies={handleMovies}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />

          <Route path="/movie/:id" component={MoviePage} />
          <Route path="/person/:id" component={Info} />
          <Route exact path="/">
            <Main
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              movies={movies}
              query={query}
              setMovieId={setMovieId}
              movieId={movieId}
            />
          </Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
