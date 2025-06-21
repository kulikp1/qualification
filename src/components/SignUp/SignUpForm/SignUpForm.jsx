import css from "./SignUpForm.module.css";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SignUpForm = () => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const { t } = useTranslation();

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Repeat password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setServerError("");
    try {
      const { email, password } = values;
      const name = email.split("@")[0];
      console.log("Payload:", {
        email,
        password,
        name,
      });

      const res = await axios.post("http://localhost:3000/auth/register", {
        email,
        password,
        name,
      });

      console.log("Registered:", res.data);
      localStorage.setItem("token", res.data.data.accessToken);
      localStorage.setItem("name", res.data.data.user.name);

      resetForm();
      navigate("/tracker");
    } catch (err) {
      if (err.response?.data?.message) {
        if (err.response.status === 409) {
          setServerError("Email is already in use.");
        } else {
          setServerError(err.response.data.message);
        }
      } else {
        setServerError("Registration failed. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        repeatPassword: "",
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

          <div className={css.inputGroupPassword}>
            <label htmlFor="repeatPassword">{t("againPasswordLabel")}</label>

            <Field
              id="repeatPassword"
              name="repeatPassword"
              type="password"
              className={css.inputField}
              placeholder={t("placeholderRepeatPassword")}
            />
            <ErrorMessage
              name="repeatPassword"
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
            {isSubmitting ? t("registering") : t("signUp")}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
