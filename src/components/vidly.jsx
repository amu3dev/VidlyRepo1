import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Vidly extends Component {
  state = { movies: getMovies(), pageSize: 4, currentPage: 1 };

  deleteRow = (movie) => {
    const result = this.state.movies.filter((film) => film._id !== movie._id);
    this.setState({ movies: result });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    console.log(page);
    this.setState({ currentPage: page });
  };

  render() {
    const x = `Showing ${this.state.movies.length} Movies in the DB`;
    const y = "There is no Movies in DB";
    const { pageSize, currentPage, movies: allMovies } = this.state;

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <div>
        <p className="h4">{movies.length > 0 ? x : y}</p>

        <table className="table table-dark">
          <thead>
            <tr>
              <th key="Title" scope="col">
                Title
              </th>
              <th key="Genre" scope="col">
                Genre
              </th>
              <th key="Stock" scope="col">
                Stock
              </th>
              <th key="Rate" scope="col">
                Rate
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <th scope="row">{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.deleteRow(movie)}
                    type="button"
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          itemsCount={this.state.movies.length}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default Vidly;
