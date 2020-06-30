import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import MoviePage from "./Components/MoviePage";
import "react-simple-flex-grid/lib/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
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
          <Route path="/movie/:title/:id" component={MoviePage} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}
