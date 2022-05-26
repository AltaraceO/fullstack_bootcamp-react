import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMoviesHandler = async () => {
    setLoading(true);
    const res = await fetch("http://swapi.dev/api/films/");

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
      </section>
    </React.Fragment>
  );
}

export default App;
