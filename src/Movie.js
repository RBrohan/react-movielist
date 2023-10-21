const Movie = ({ movie }) => {
  const { title, tagline, vote_average } = movie;
  return (
    <main className="movie-container">
      <h2>{title}</h2>
      <p>{tagline}</p>
      <p>{vote_average} / 10</p>
    </main>
  );
};

export default Movie;
