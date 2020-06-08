import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search.."
        name="query"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      <button type="submit">
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default SearchBox;
