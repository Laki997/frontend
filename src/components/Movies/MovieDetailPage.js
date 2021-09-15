import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieAction } from "../../store/movies/actions";
import { selectOneMovie } from "../../store/movies/selectors";
const MovieDetailPage = (props) => {
  const dispatch = useDispatch();
  const movie = useSelector(selectOneMovie());
  const params = useParams();
  useEffect(() => {
    dispatch(getMovieAction(params.id));
  });

  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  );
};

export default MovieDetailPage;
