import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { selectToken } from "../store/login/selectors";
import { ROUTES } from "../constants";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const IsLogin = useSelector(selectToken());
  return (
    <Route
      {...rest}
      render={(props) =>
        IsLogin ? <Component {...props} /> : <Redirect to={ROUTES.LOGIN} />
      }
    />
  );
};

export default PrivateRoute;
