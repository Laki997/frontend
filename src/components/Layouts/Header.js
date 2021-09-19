import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import { selectToken } from "../../store/login/selectors";

const Header = () => {
  const token = useSelector(selectToken());

  const renderHeader = () => {
    if (token) {
      return (
        <div className="header_container">
          <Link to={ROUTES.MOVIE_LIST}>MOVIES</Link>
          <Link to={ROUTES.CREATE_MOVIE}>CREATE</Link>
        </div>
      );
    } else {
      return (
        <div className="header_container">
          <Link to={ROUTES.LOGIN}>Login</Link>
          <Link to={ROUTES.REGISTER}>REGISTER</Link>
        </div>
      );
    }
  };
  return renderHeader();
};

export default Header;
