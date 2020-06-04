import React from "react";

const Select = ({ name, label, options, error, ...reset }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text" htmlFor={name}>
          {label}
        </label>
      </div>
      <select name={name} id={name} {...reset} className="custom-select">
        <option value="" />
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
