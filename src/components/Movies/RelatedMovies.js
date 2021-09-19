import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRelatedMovies } from "../../store/movies/actions";
import { selectRelatedMovies } from "../../store/movies/selectors";
import { RiFilmLine } from "react-icons/ri";

const RelatedMovies = (id) => {
  const dispatch = useDispatch();
  const relatedMovies = useSelector(selectRelatedMovies());

  useEffect(() => {
    dispatch(getRelatedMovies(id));
  }, []);
  return (
    <div className="sidebar">
      <h3>Related Movies</h3>
      <ul>
        {relatedMovies.map((movie) => {
          return (
            <Link key={movie.id} to={`movies/${movie.id}`}>
              <li>
                <h2>
                  <RiFilmLine />
                  {movie.title}
                </h2>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default RelatedMovies;
