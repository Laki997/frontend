import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { token } from "../store/login/selectors";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const IsLogin = useSelector(token());
  return (
    <Route
      {...rest}
      render={(props) =>
        IsLogin ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
