import { Formik, Form } from "formik";
import InputField from "../shared/formik/input";
import Select from "./select";
import { validate } from "./validations";
import { useDispatch } from "react-redux";
import { createMovieAction } from "../../store/movies/actions";

const MovieForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        coverImage: "",
        genre: "DRAMA",
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        dispatch(createMovieAction(values));
        resetForm();
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Create movie</h1>
          <Form>
            <InputField label="Title" name="title" type="text" />
            <InputField label="Description" name="description" type="text" />
            <InputField label="Cover image" name="coverImage" type="url" />
            <Select label="Genre" name="genre">
              <option value="SF">SF</option>
              <option value="DRAMA">DRAMA</option>
              <option value="COMEDY">COMEDY</option>
              <option value="HOROR">HOROR</option>
            </Select>

            <div className="btn-toolbar">
              <button className="btn btn-dark btn-sm mt-3" type="submit">
                Create
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

export default MovieForm;
