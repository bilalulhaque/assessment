import React from "react";

const FormInput = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="input-div">
      <span className="input-label">
        <label>{label}</label>
        <span className="input-label-span">*</span>
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`form-control input-field ${error ? "is-invalid" : ""}`}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default FormInput;
