import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import RegisterFrom from "./components/Register/RegisterForm";
import PrivateRoute from "../src/routers/PrivateRoute";
import PublicRoute from "./routers/PublicRoute";
import Movies from "./components/Movies/movies";

function App() {
  return (
    <Router>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5">
            <Switch>
              <PrivateRoute component={Movies} path="/" exact />
              <PublicRoute
                restricted={true}
                component={LoginForm}
                path="/login"
                exact
              />
              <PublicRoute
                restricted={true}
                component={RegisterFrom}
                path="/register"
                exact
              />
            </Switch>
          </div>
          <div className="col-md-7 my-auto"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
