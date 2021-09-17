import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleMovie } from "../../store/movies/actions";
import { selectOneMovie } from "../../store/movies/selectors";
import { createMovieReaction } from "../../store/movies/actions";
const MovieDetailPage = () => {
  const dispatch = useDispatch();
  const movie = useSelector(selectOneMovie());
  const params = useParams();

  const handleClick = (reaction) => {
    const payload = { movie: movie.id, reaction };
    dispatch(createMovieReaction(payload));
  };

  useEffect(() => {
    dispatch(getSingleMovie(params.id));
  }, []);

  return (
    <div>
      <h1>{movie.title}</h1>
      <h2>{movie.description}</h2>
      <h4>{movie.genre}</h4>
      <h3>Likes:{movie.likes}</h3>
      <h3>Dislikes:{movie.dislikes}</h3>
      <img alt="img" src={movie.cover_image} height="200px" width="200px"></img>
      <button onClick={() => handleClick(true)} className="btn btn-primary">
        Like
      </button>
      <button onClick={() => handleClick(false)} className="btn btn-danger">
        Dislike
      </button>
    </div>
  );
};

export default MovieDetailPage;
