import React from "react";
const Input = ({ type, name, label, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        autoFocus
        //ref={this.username}
        id={name}
        type={type}
        className="form-control"
      />
      {/* div.alert.alert-danger */}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
