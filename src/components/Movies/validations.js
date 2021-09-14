import * as Yup from "yup";

export const validate = Yup.object({
  title: Yup.string().max(255).required("Title is required"),
  description: Yup.string().max(255).required("Description is required"),
  coverImage: Yup.string().max(200).required("URL image is required"),
});
