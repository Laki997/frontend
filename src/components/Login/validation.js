import * as Yup from "yup";

export const validate = Yup.object({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be 6 characters")
    .required("Password is required"),
});
