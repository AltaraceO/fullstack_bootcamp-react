import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMoviesHandler = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://swapi.dev/api/film/");

      if (!res.ok) {
        throw new Error("something went wrong!");
      }
      const data = await res.json();

      const transformedMovies = data.results.map((e) => {
        return {
          id: e.episode_id,
          title: e.title,
          openingText: e.opening_crawl,
          releaseDate: e.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!loading ? <MoviesList movies={movies} /> : <p>Loading...</p>}
        {!loading && movies.length === 0 && <p>No Data Yet</p>}
        {error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
