import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../store/login/selectors";
import { ROUTES } from "../constants";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const IsLogin = useSelector(selectToken());
  return (
    <Route
      {...rest}
      render={(props) =>
        IsLogin && restricted ? (
          <Redirect to={ROUTES.MOVIES} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
