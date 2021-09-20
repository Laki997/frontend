import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import TextAreaField from "../shared/formik/textarea";
import { validate } from "./validation";
import { createCommentAction } from "../../store/movies/actions";

const CommentForm = ({ id, onSubmitComment }) => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        content: "",
      }}
      validationSchema={validate}
      onSubmit={(values, { resetForm }) => {
        dispatch(createCommentAction({ ...values, ...{ movie: id } }));
        onSubmitComment(values);
        resetForm();
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Leave a comment</h1>
          <Form>
            <TextAreaField label="Content" name="content" type="text" />
            <div className="btn-toolbar">
              <button className="btn btn-dark btn-sm mt-3" type="submit">
                Submit
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

export default CommentForm;
