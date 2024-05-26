import React from "react";
import "../App.css";
import SignupForm from "../main-components/signUp.component";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import apiList from "../constants/apiList";


function SignUp() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await fetch(apiList.signUp, {
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
          text: "Signup successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        login();
        localStorage.setItem("access_token", responseData.access_token)
        navigate("/application");
      } else {
        setErrors({ api: responseData.message || "Signup failed" });
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

  return <SignupForm handleSubmit={handleSubmit} />;
}

export default SignUp;
