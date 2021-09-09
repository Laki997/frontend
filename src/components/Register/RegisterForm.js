import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../store/register/actions";

const Register = () => {
  const dispatch = useDispatch();

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters")
      .required("Password is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        dispatch(registerUserAction(values));
        resetForm();
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign up</h1>
          <Form>
            <TextField label="First name" name="firstName" type="text" />
            <TextField label="Last name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <div className="btn-toolbar">
              <button className="btn btn-dark btn-sm mt-3" type="submit">
                Register
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

export default Register;
