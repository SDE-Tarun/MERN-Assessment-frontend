import React from "react";

const Dropdown = ({ label, name, options, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <select name={name} value={value} onChange={onChange} required>
        <option value="">Select {label}</option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
