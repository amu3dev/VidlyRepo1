import React, { Component } from "react";
const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        autoFocus
        ref={this.username}
        id={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
