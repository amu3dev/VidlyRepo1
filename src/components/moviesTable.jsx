import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

class MovieTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like
          liked={movie.liked}
          onClick={() => this.props.onHandleLike(movie)}
        />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDeleteRow(movie)}
          type="button"
          className="btn btn-sm btn-danger"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, sortColumn, onSort } = this.props;

    console.log('columns = >', this.columns);

    return (

      <table className="table table-dark table-striped">
      <TableHeader sortColumn={sortColumn} onSort={onSort} columns={this.columns} />

      <TableBody data={movies} columns={this.columns} />
    </table>

    );
  }
}

export default MovieTable;
