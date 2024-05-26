import React from "react";
import "../App.css";
import SignInForm from "../main-components/signIn.component";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import apiList from "../constants/apiList";

function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (
    values,
    { setSubmitting, setErrors, resetForm }
  ) => {
    try {
      const response = await fetch(apiList.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const responseData = await response.json();
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "SignIn successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.setItem("access_token", responseData.access_token);
        login();
        resetForm();
        navigate("/application");
      } else {
        setErrors({ api: responseData.message || "SignIn failed" });
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: responseData.message,
        });
      }
    } catch (error) {
      setErrors({ api: "Error: " + error.message });
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return <SignInForm handleSubmit={handleSubmit} />;
}

export default SignIn;
