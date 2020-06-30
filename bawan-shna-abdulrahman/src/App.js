import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import MoviePage from "./Components/MoviePage";
import "react-simple-flex-grid/lib/main.css";

function App() {
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
    <div className="page-container">
      <div className="content-wrap">
        <Header
          handleQuery={handleQuery}
          handleMovies={handleMovies}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        {movieId != "" && (
          <MoviePage movieId={movieId} setMovieId={setMovieId} o />
        )}
        {movieId == "" && (
          <Main
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            movies={movies}
            query={query}
            setMovieId={setMovieId}
            movieId={movieId}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}
export default App;
