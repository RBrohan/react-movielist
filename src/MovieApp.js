import { useState, useEffect } from "react";
import Movie from "./Movie";
import { Link, Switch } from "react-router-dom";
import MovieDescription from "./MovieDescription";

const MovieApp = () => {
  const [moviesData, setMoviesData] = useState([]);
  useEffect(() => {
    // Fetch the list of movies from the server
    const getData = async () => {
      const response = await fetch("/server/movies_metadata.json");
      const payload = await response.json();
      setMoviesData(payload);
    };
    getData();
  }, []);

  //   console.log(moviesData);

  return (
    <header className="App-header">
      <h1>Movies List</h1>
      <div className="movie-wrapper">
        {moviesData.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-list">
            <Movie movie={movie} />
          </Link>
        ))}
      </div>
    </header>
  );
};

export default MovieApp;
