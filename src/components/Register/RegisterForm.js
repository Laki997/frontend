import { Formik, Form } from "formik";
import InputField from "../shared/formik/input";
import { validate } from "./validation";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../store/register/actions";

const Register = () => {
  const dispatch = useDispatch();

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
            <InputField label="First name" name="firstName" type="text" />
            <InputField label="Last name" name="lastName" type="text" />
            <InputField label="Email" name="email" type="email" />
            <InputField label="Password" name="password" type="password" />
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
