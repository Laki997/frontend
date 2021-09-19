import "./App.css";
import { Switch } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import RegisterFrom from "./components/Register/RegisterForm";
import PrivateRoute from "../src/routers/PrivateRoute";
import PublicRoute from "./routers/PublicRoute";
import MovieList from "../src/components/Movies/MovieList";
import { ROUTES } from "../src/constants";
import MovieForm from "./components/Movies/MovieForm";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./store";
import MovieDetailPage from "./components/Movies/MovieDetailPage";
import Header from "./components/Layouts/Header";

function App() {
  return (
    <ConnectedRouter history={history}>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5">
            <Header />
            <Switch>
              <PrivateRoute
                component={MovieForm}
                path={ROUTES.CREATE_MOVIE}
                exact
              />
              <PublicRoute
                restricted={true}
                component={LoginForm}
                path={ROUTES.LOGIN}
                exact
              />
              <PublicRoute
                restricted={true}
                component={RegisterFrom}
                path={ROUTES.REGISTER}
                exact
              />
              <PrivateRoute
                restricted={true}
                component={MovieList}
                path={ROUTES.MOVIE_LIST}
                exact
              />
              <PrivateRoute
                restricted={true}
                component={MovieDetailPage}
                path={ROUTES.MOVIE_DETAIL_PAGE}
                exact
              />
            </Switch>
          </div>
          <div className="col-md-7 my-auto"></div>
        </div>
      </div>
    </ConnectedRouter>
  );
}

export default App;
