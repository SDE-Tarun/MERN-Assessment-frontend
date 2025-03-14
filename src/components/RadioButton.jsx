import React from "react";

const RadioButton = ({ label, name, options, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      {options.map((opt, index) => (
        <label key={index}>
          <input type="radio" name={name} value={opt} checked={value === opt} onChange={onChange} required />
          {opt}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
