import { Formik, Form } from "formik";
import InputField from "../shared/formik/input";
import Select from "../shared/formik/select";
import { validate } from "./validations";
import { useDispatch } from "react-redux";
import { MOVIE_ENTITY, MOVIE_GENRE } from "./constants";
import { createMovieAction } from "../../store/movies/actions";

const MovieForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        title: MOVIE_ENTITY.TITLE,
        description: MOVIE_ENTITY.DESCRIPTION,
        coverImage: MOVIE_ENTITY.COVER_IMAGE,
        genre: MOVIE_ENTITY.GENRE,
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
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
              <option value={MOVIE_GENRE.SF}>{MOVIE_GENRE.SF}</option>
              <option value={MOVIE_GENRE.DRAMA}>{MOVIE_GENRE.DRAMA}</option>
              <option value={MOVIE_GENRE.COMEDY}>{MOVIE_GENRE.COMEDY}</option>
              <option value={MOVIE_GENRE.HOROR}>{MOVIE_GENRE.HOROR}</option>
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
