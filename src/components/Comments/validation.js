import * as Yup from "yup";

export const validate = Yup.object({
  content: Yup.string()
    .required("Content is required")
    .max(500, "Maximum length of comments is 500 characters!"),
});
