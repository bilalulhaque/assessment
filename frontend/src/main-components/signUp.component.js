import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "../components/formInput";
import { Link } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

const SignupForm = ({ handleSubmit }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Sign Up</h1>
              <Formik
                initialValues={{ name: "", email: "", password: "" }}
                validationSchema={SignupSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, errors, handleChange }) => (
                  <>
                    <Form>
                      <FormInput
                        label="Name"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        error={errors.name}
                      />
                      <FormInput
                        label="Email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        error={errors.email}
                      />
                      <FormInput
                        label="Password"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        error={errors.password}
                      />
                      <button
                        type="submit"
                        className="btn btn-primary btn-block submit-btn"
                        disabled={isSubmitting}
                      >
                        Sign Up
                      </button>
                    </Form>
                    <p className="anchor-tag">
                      Already have an account? <Link to="/login">Sign In</Link>
                    </p>
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
