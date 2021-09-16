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

  const handlerLike = (reaction) => {
    dispatch(createMovieReaction(movie.id, reaction));
    console.log(reaction);
  };

  const handlerDislike = (reaction) => {
    dispatch(createMovieReaction(movie.id, reaction));
    console.log(reaction);
  };
  useEffect(() => {
    dispatch(getSingleMovie(params.id));
  }, []);

  return (
    <div>
      <h1>{movie.title}</h1>
      <h2>{movie.description}</h2>
      <h4>{movie.genre}</h4>
      <img alt="img" src={movie.cover_image}></img>
      <button onClick={handlerLike(true)} className="btn btn-primary">
        Like
      </button>
      <button onClick={handlerDislike(false)} className="btn btn-danger">
        Dislike
      </button>
    </div>
  );
};

export default MovieDetailPage;
