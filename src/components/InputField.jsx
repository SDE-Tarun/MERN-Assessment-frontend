import React from "react";

const InputField = ({ label, type, name, value, onChange, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} required />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default InputField;
