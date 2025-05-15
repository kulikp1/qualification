import css from "./SignInForm.module.css";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const validationSchema = yup.object({
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setServerError("");
    try {
      const res = await axios.post("http://localhost:3000/auth/login", values);
      console.log("Login successful:", res.data);
      localStorage.setItem("token", res.data.data.accessToken);
      navigate("/tracker");
    } catch (err) {
      if (err.response?.data?.message) {
        setServerError(err.response.data.message);
      } else {
        setServerError("Login failed. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        password: "",
        email: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.signInFormContainer}>
          <div className={css.inputGroupEmail}>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              className={css.inputField}
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          <div className={css.inputGroupPassword}>
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              className={css.inputField}
              placeholder="Enter your password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </div>

          {serverError && <div className={css.error}>{serverError}</div>}

          <button
            type="submit"
            className={css.submitBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
