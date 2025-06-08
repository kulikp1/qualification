import css from "./SignInForm.module.css";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SignInForm = () => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

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
      localStorage.setItem("name", res.data.data.user.name);

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
            <label htmlFor="email">{t("emailLabel")}</label>
            <Field
              id="email"
              name="email"
              type="email"
              className={css.inputField}
              placeholder={t("placeholderEmail")}
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          <div className={css.inputGroupPassword}>
            <label htmlFor="password">{t("passwordLabel")}</label>
            <Field
              id="password"
              name="password"
              type="password"
              className={css.inputField}
              placeholder={t("placeholderPassword")}
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
            {isSubmitting ? t("signingIn") : t("signIn")}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
