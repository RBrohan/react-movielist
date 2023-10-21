import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const MovieDescription = () => {
  const [currentMovie, setCurrentMovie] = useState([]);

  //   const { id } = useParams();

  const id = Number(useLocation().pathname.split("/").pop());
  console.log(id);

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetch(`/server/movies_metadata.json/`);
      const data = await response.json();
      const selectedMovie = data.find((m) => m.id === id);
      setCurrentMovie(selectedMovie);
    };
    getMovie();
  }, [id]);

  console.log(currentMovie);
  return (
    <div className="more-info">
      <div className="details">
        <div className="title">
          <h1> {currentMovie.title} </h1>
          <h3> {currentMovie.tagline} </h3>
        </div>

        <p> {currentMovie.overview} </p>

        <div className="release-date">
          <h3> {currentMovie.release_date} </h3>
          <h3> {currentMovie.runtime} minutes </h3>
          <h3> {currentMovie.status} </h3>
        </div>

        <div className="vote">
          <h3> {currentMovie.vote_average} / 10 </h3>
          <h3> Vote Count - {currentMovie.vote_count} </h3>
        </div>

        <Link to="/" className="back-btn">
          Back to Movies List
        </Link>
      </div>
    </div>
  );
};

export default MovieDescription;
