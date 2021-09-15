import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieAction } from "../../store/movies/actions";
import { selectOneMovie } from "../../store/movies/selectors";
const MovieDetailPage = () => {
  const dispatch = useDispatch();
  const movie = useSelector(selectOneMovie());
  const params = useParams();
  useEffect(() => {
    dispatch(getMovieAction(params.id));
  }, []);

  return (
    <div>
      <h1>{movie.title}</h1>
      <h2>{movie.description}</h2>
      <h4>{movie.genre}</h4>
      <img alt="img" src={movie.cover_image}></img>
    </div>
  );
};

export default MovieDetailPage;
