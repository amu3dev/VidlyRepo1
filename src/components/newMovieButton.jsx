import React from "react";
import { Link } from "react-router-dom";

const NewMovieButton = () => {
  return (
    <div>
      <Link to="/movies/new/">
        <button type="button" className="btn btn-primary">
          New Movie
        </button>
      </Link>
    </div>
  );
};

export default NewMovieButton;
