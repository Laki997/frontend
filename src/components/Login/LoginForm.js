import { Formik, Form } from "formik";
import TextField from "./TextField";
import { validate } from "./validation";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../store/login/actions";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        dispatch(loginUserAction(values));
        history.push("/");
        resetForm();
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign in</h1>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <div className="btn-toolbar">
              <button className="btn btn-dark btn-sm mt-3" type="submit">
                Login
              </button>
              <button className="btn btn-danger btn-sm mt-3 mr-3s" type="reset">
                Reset
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
