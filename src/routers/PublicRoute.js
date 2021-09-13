import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { token } from "../store/login/selectors";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const IsLogin = useSelector(token());
  return (
    <Route
      {...rest}
      render={(props) =>
        IsLogin && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
