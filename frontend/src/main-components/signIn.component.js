import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "../components/formInput";
import { Link } from "react-router-dom";


const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SigninForm = ({ handleSubmit }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Sign In</h1>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={SigninSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, errors, handleChange }) => (
                  <>
                    <Form>
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
                        Sign In
                      </button>
                    </Form>
                    <p className="anchor-tag">
                      Don' t have an account? <Link to="/">Register</Link>
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

export default SigninForm;
